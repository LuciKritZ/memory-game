import React, { ReactElement } from 'react';
import './App.css';
import Homepage from './components/Homepage/index';

const App = (): ReactElement => {
    return (
        <div className="App">
            <Homepage />
        </div>
    );
};

export default App;
