"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("../game/index");
var Loader_1 = require("../common/Loader");
var index_2 = require("../card/index");
var Playground = function () {
    var _a = react_1.useState(0), numberOfCards = _a[0], setNumberOfCards = _a[1];
    var _b = react_1.useState(false), isGameBegun = _b[0], setIsGameBegun = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(new Date()), startTime = _d[0], setStartTime = _d[1];
    var startGame = function (cards) {
        setStartTime(new Date());
        setLoading(true);
        setNumberOfCards(cards);
        setIsGameBegun(true);
        setLoading(false);
    };
    if (loading) {
        return react_1["default"].createElement(Loader_1["default"], { fullScreen: true, defaultColor: false });
    }
    ;
    return (isGameBegun ? react_1["default"].createElement(index_2["default"], { playAgain: function () { return setIsGameBegun(false); }, numberOfCards: numberOfCards, startTime: startTime }) :
        react_1["default"].createElement(index_1["default"], { startGame: startGame }));
};
exports["default"] = Playground;
