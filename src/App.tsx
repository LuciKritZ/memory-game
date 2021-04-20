import React, { ReactElement, useState, useEffect } from 'react';
import Loader from './components/common/Loader';
import Login from './components/login/index';
import Playground from './components/playground/index';
import useStyles from './App.style';

const App = (): ReactElement => {
  const styles = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mount = () => {
      const username = localStorage.getItem('username');
      if(username !== null && username !== undefined && username !== '') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    mount();
  }, []);

  const onSubmit = async () => {
    setLoading(true);
    setIsLoggedIn(true);
    setLoading(false);
  };

  if (loading) {
    return <Loader fullScreen />;
  }
  
  return (
    <div className={styles.root}>
      {isLoggedIn ? <Playground />: <Login onSubmit={onSubmit} />}
    </div>
  );
}

export default App;
