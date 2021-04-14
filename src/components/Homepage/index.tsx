import React, { ReactElement } from 'react';
import { constants } from '../utils/constants';
import PropTypes from 'prop-types';
import {
    Toolbar,
    Slide,
    AppBar,
    TextField,
    Grid,
    Typography,
    CssBaseline,
    useScrollTrigger,
    Box,
    Container,
    Button,
    InputLabel,
    FormHelperText,
    Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GameCard from '../Card/index';
import { useStyles } from './style';

const Homepage = (): ReactElement => {
    const styles = useStyles();
    const frameworks = [
        'angular2',
        'vue',
        'react',
        'grunt',
        'phantomjs',
        'ember',
        'babel',
        'ionic',
        'gulp',
        'meteor',
        'yeoman',
        'yarn',
        'nodejs',
        'bower',
        'browserify',
    ];
    const [rows, setRows] = React.useState(1);
    const [columns, setColumns] = React.useState(2);
    const [totalCards, setTotalCards] = React.useState(1);
    const [isGameStarted, setIsGameStarted] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [duplicatedCards, setDuplicateCards] = React.useState<Array<any>>([]);
    const [randomizedCards, setRandomizedCards] = React.useState<Array<any>>([]);
    const [finalizedCards, setFinalizedCards] = React.useState<Array<any>>([]);
    const [openedCards, setOpenedCards] = React.useState<Array<any>>([]);
    const dropdownOptions = [
        {
            label: 'Beginner',
            value: constants.BEGINNER_LEVEL,
        },
        {
            label: 'Intermediate',
            value: constants.INTERMEDIATE_LEVEL,
        },
        {
            label: 'Advanced',
            value: constants.ADVANCED_LEVEL,
        },
        {
            label: 'Automatic',
            value: constants.AUTOMATIC_LEVEL,
        },
    ];

    React.useEffect(() => {
        setTotalCards(rows * columns);
        if (rows * columns === 0 || (rows * columns) % 2 !== 0 || rows * columns > 100 || rows > 10 || columns > 10) {
            setError(true);
        } else {
            setError(false);
        }
    }, [rows, columns]);

    const shuffleCards = (array: Array<any>): Array<any> => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const start = (): void => {
        const finalizedCardsTemp: Array<any> = [];
        const duplicate: Array<any> = frameworks.concat(frameworks);
        const randomized: Array<any> = shuffleCards(duplicate);
        setDuplicateCards(randomized);
        setRandomizedCards(shuffleCards(duplicate));
        randomized.map((name: string) => {
            finalizedCardsTemp.push({
                name,
                close: true,
                complete: false,
                fail: false,
            });
        });
        setFinalizedCards(finalizedCardsTemp);
    };

    const check = (): void => {
        const finalizedCardsTemp: Array<any> = finalizedCards;
        const openedCardsTemp: Array<any> = openedCards;
        if (
            openedCardsTemp[0].name === openedCardsTemp[1].name &&
            openedCardsTemp[0].index !== openedCardsTemp[1].index
        ) {
            finalizedCardsTemp[openedCardsTemp[0].index].complete = true;
            finalizedCardsTemp[openedCardsTemp[1].index].complete = true;
        } else {
            finalizedCardsTemp[openedCardsTemp[0].index].close = true;
            finalizedCardsTemp[openedCardsTemp[1].index].close = true;
        }
        setFinalizedCards(finalizedCardsTemp);
        setOpenedCards([]);
        // this.setState({
        //   finalizedFrameworks,
        //   openedFrameworks: []
        // })
    };

    const handleClick = (name: string, index: number): void => {
        if (openedCards.length === 2) {
            setTimeout(() => {
                check();
            }, 750);
        } else {
            const framework = {
                name,
                index,
            };
            const finalizedCardsTemp: Array<any> = finalizedCards;
            const frameworks: Array<any> = openedCards;
            finalizedCardsTemp[index].close = false;
            frameworks.push(framework);
            setOpenedCards(frameworks);
            setFinalizedCards(finalizedCardsTemp);
            console.log(framework, frameworks);
            if (frameworks.length === 2) {
                setTimeout(() => {
                    check();
                }, 750);
            }
        }
    };

    const showOptions = (): ReactElement => {
        return (
            <Grid container alignItems="center" className="options-container">
                {/* <Grid container item xs={12} alignItems="center" justify="center">
                    <Typography variant="h6" className="options-heading-container">
                        Choose options from:
                    </Typography>
                </Grid> */}
                <Grid
                    container
                    item
                    xs={12}
                    lg={6}
                    justify="center"
                    alignItems="center"
                    className="text-field-container"
                >
                    <Grid container item xs={12} justify="center" alignItems="center" className="input-grid-container">
                        <TextField
                            InputLabelProps={{
                                classes: { root: 'input-container', error: 'input-container-error' },
                            }}
                            value={rows}
                            onChange={(e) => {
                                if (e.target.value !== '') {
                                    setRows(parseInt(e.target.value));
                                } else {
                                    setRows(0);
                                }
                            }}
                            classes={{ root: 'text-field' }}
                            type="number"
                            placeholder="Enter rows"
                            label="Enter rows"
                            error={error && (rows > 10 || rows === 0)}
                        />
                    </Grid>
                    {error && (rows > 10 || rows === 0) && (
                        <Grid
                            container
                            item
                            xs={12}
                            justify="center"
                            alignItems="center"
                            className="error-grid-container"
                        >
                            <FormHelperText className="input-container-error">
                                Rows can&apos;t be {rows === 0 ? '0' : 'more than 10'}.
                            </FormHelperText>
                        </Grid>
                    )}
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    lg={6}
                    justify="center"
                    alignItems="center"
                    className="text-field-container"
                >
                    <Grid container item xs={12} justify="center" alignItems="center" className="input-grid-container">
                        <TextField
                            InputLabelProps={{
                                classes: { root: 'input-container', error: 'input-container-error' },
                            }}
                            value={columns}
                            onChange={(e) => {
                                console.log(e.target.value);
                                if (e.target.value !== '') {
                                    setColumns(parseInt(e.target.value));
                                } else {
                                    setColumns(0);
                                }
                            }}
                            classes={{ root: 'text-field' }}
                            type="number"
                            placeholder="Enter columns"
                            label="Enter columns"
                            error={error && (columns > 10 || columns === 0)}
                        />
                    </Grid>
                    {error && (columns > 10 || columns === 0) && (
                        <Grid
                            container
                            item
                            xs={12}
                            justify="center"
                            alignItems="center"
                            className="error-grid-container"
                        >
                            <FormHelperText className="input-container-error">
                                Columns can&apos;t be {columns === 0 ? '0' : 'more than 10'}.
                            </FormHelperText>
                        </Grid>
                    )}
                </Grid>
                <Grid container item xs={12} lg={12} justify="center" alignItems="center" className="button-container">
                    <Button
                        disabled={error}
                        classes={{
                            root: 'play-button',
                            disabled: 'play-button-disabled',
                        }}
                        onClick={() => {
                            setTotalCards(rows * columns);
                            setIsGameStarted(true);
                            start();
                        }}
                    >
                        <ExpandMoreIcon className="arrow-icon" />
                    </Button>
                </Grid>
            </Grid>
        );
    };

    const showCards = (): ReactElement => {
        return (
            <Grid container justify="center" alignItems="center" className="game-container">
                {finalizedCards.map((framework, index) => {
                    return (
                        <GameCard
                            key={index}
                            image={framework.name}
                            handleClick={() => {
                                handleClick(framework.name, index);
                            }}
                            close={framework.close}
                            complete={framework.complete}
                        />
                    );
                })}
            </Grid>
        );
    };

    return (
        <div className={styles.root}>
            <AppBar>
                <Toolbar className="toolbar">
                    <Link href="/" className="toolbar-link">
                        <Typography variant="h6" className="toolbar-heading">
                            Memory Game
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            {!isGameStarted ? showOptions() : showCards()}
        </div>
    );
};

export default Homepage;
