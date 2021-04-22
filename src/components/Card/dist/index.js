"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("../utils/constants");
var index_1 = require("../individual-card/index");
var core_1 = require("@material-ui/core");
var styles_1 = require("./styles");
var clsx_1 = require("clsx");
var Card = function (_a) {
    var numberOfCards = _a.numberOfCards, startTime = _a.startTime, playAgain = _a.playAgain;
    var _b = react_1.useState([]), finalizedCards = _b[0], setFinalizedCards = _b[1];
    var _c = react_1.useState([]), openedCards = _c[0], setOpenedCards = _c[1];
    var _d = react_1.useState(new Date()), endTime = _d[0], setEndTime = _d[1];
    var _e = react_1.useState(false), isGameEnded = _e[0], setIsGameEnded = _e[1];
    var styles = styles_1["default"]();
    /**
      * This function is used to do the comparison of the elements present in the openedCards array.
      * @return {void}
    */
    var check = function () {
        var finalizedFrameworks = finalizedCards;
        /**
          Checking whether the name of the elements present in the openedCards array are the same,
          but the index are different. It will show if the cards are different sequence wise.
        */
        if ((openedCards[0].name === openedCards[1].name) &&
            (openedCards[0].index !== openedCards[1].index)) {
            /**
              If they are same, then update the complete property of the particular objects in the finalizedCards to true.
            */
            finalizedFrameworks[openedCards[0].index].complete = true;
            finalizedFrameworks[openedCards[1].index].complete = true;
        }
        else {
            /**
              Otherwise close the elements by setting the close property of the particular objects in the finalizedCards to true.
            */
            finalizedFrameworks[openedCards[0].index].close = true;
            finalizedFrameworks[openedCards[1].index].close = true;
        }
        // Checking whether the game is ended.
        var gameHasFinished = finalizedFrameworks.filter(function (framework) { return framework.complete === true; });
        if (gameHasFinished.length === finalizedFrameworks.length) {
            setIsGameEnded(true);
            setEndTime(new Date());
        }
        // Then update the states with the updated frameworkCards value and empty the openedFrameworks array.
        setFinalizedCards(finalizedFrameworks);
        setOpenedCards([]);
    };
    /**
      * The event that is being fired when the user clicks on the card.
      * @param {string} name - The name of the card on which the user has clicked.
      * @param {number} index - The index of the card on which the user has clicked.
      * @return {void}
    */
    var handleClick = function (name, index) {
        /**
          Checking whether the length of the openedCards array is 2,
          so that we can check whether both the elements in the array are of the same framework.
        */
        if (openedCards.length === 2) {
            setTimeout(function () {
                check();
            }, 750);
        }
        else {
            /**
              If the length is 1 or 0, then we will create the element and push it inside the openedCards array.
            */
            var framework = {
                name: name,
                index: index
            };
            var finalizedFrameworks = finalizedCards;
            var frameworks = openedCards;
            finalizedFrameworks[index].close = false;
            frameworks.push(framework);
            setOpenedCards(frameworks);
            setFinalizedCards(finalizedFrameworks);
            /**
              After the element is pushed, if the length becomes 2, then we will do the comparison again.
            */
            if (frameworks.length === 2) {
                setTimeout(function () {
                    check();
                }, 750);
            }
            ;
        }
    };
    /**
      * Shuffling the cards in the random order.
      * @param {array} array - The array that is required to be shuffled.
      * @return {array} The array after being shuffled.
    */
    var shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    /**
      * Function to be called when the component is mounted.
    */
    var start = function () {
        var finalizedFrameworks = [];
        var uniqueCards = constants_1.typesOfCards.splice(0, numberOfCards / 2);
        var duplicatedFrameworks = uniqueCards.concat(uniqueCards);
        console.log(duplicatedFrameworks, 'duplicatedFrameworks');
        var randomizedFrameworks = shuffle(duplicatedFrameworks);
        randomizedFrameworks.forEach(function (name) {
            finalizedFrameworks.push({
                name: name,
                close: true,
                complete: false,
                fail: false
            });
        });
        setFinalizedCards(finalizedFrameworks);
    };
    react_1.useEffect(function () {
        start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var getTotalTimeTaken = function () {
        var timeDiff = endTime.getTime() - startTime.getTime(); //in ms
        // strip the ms
        timeDiff /= 1000;
        // get seconds 
        var seconds = Math.round(timeDiff);
        return seconds;
    };
    return (react_1["default"].createElement(core_1.Grid, { container: true, className: styles.root },
        react_1["default"].createElement(core_1.Grid, { xs: 12, className: clsx_1["default"]("playground-container") },
            isGameEnded && (react_1["default"].createElement(core_1.Grid, { item: true, xs: 12 },
                react_1["default"].createElement("h1", null, "You've completed the game in " + getTotalTimeTaken() + " seconds for " + numberOfCards + " cards."),
                react_1["default"].createElement(core_1.Button, { onClick: playAgain }, "Play Again"))),
            !isGameEnded && finalizedCards.map(function (framework, index) {
                return (react_1["default"].createElement(index_1["default"], { framework: framework.name, click: function () { return handleClick(framework.name, index); }, close: framework.close, complete: framework.complete }));
            }))));
};
exports["default"] = Card;
