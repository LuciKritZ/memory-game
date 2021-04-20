"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var style_1 = require("./style");
var Game = function (_a) {
    var startGame = _a.startGame;
    var styles = style_1["default"]();
    var _b = react_1.useState(0), numberOfCards = _b[0], setNumberOfCards = _b[1];
    var _c = react_1.useState(false), error = _c[0], setError = _c[1];
    return (react_1["default"].createElement(core_1.Grid, { container: true, className: styles.root },
        react_1["default"].createElement(core_1.Grid, { container: true, className: "game-container" },
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, className: "game-name-heading" },
                react_1["default"].createElement(core_1.Typography, { component: "p" }, "Memory Game")),
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, className: "game-box-input" },
                react_1["default"].createElement(core_1.TextField, { type: "number", value: numberOfCards, onChange: function (e) {
                        if (parseInt(e.target.value) === 0 ||
                            parseInt(e.target.value) > 30 ||
                            parseInt(e.target.value) % 2 !== 0 ||
                            parseInt(e.target.value) < 0) {
                            setError(true);
                        }
                        else {
                            setError(false);
                        }
                        if (e.target.value === '') {
                            setNumberOfCards(0);
                        }
                        else
                            setNumberOfCards(parseInt(e.target.value));
                    }, variant: "outlined", error: error, id: "outlined-error-helper-text", helperText: error ? "Incorrect number" : "", classes: {
                        root: "text-input"
                    }, InputProps: {
                        classes: {
                            error: "text-input-error"
                        }
                    }, label: "Number of cards" })),
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, className: "game-box-button" },
                react_1["default"].createElement(core_1.Button, { disabled: error || numberOfCards === 0, classes: {
                        root: "play-btn-root",
                        disabled: "play-btn-disabled"
                    }, onClick: function () {
                        if (numberOfCards === 0 || numberOfCards > 30 || numberOfCards < 0) {
                            return;
                        }
                        else {
                            startGame(numberOfCards);
                        }
                    } }, "Let's Begin")))));
};
exports["default"] = Game;
