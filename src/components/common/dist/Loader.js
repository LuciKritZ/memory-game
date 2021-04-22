"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("./styles");
var Loading = function (_a) {
    var fullScreen = _a.fullScreen, defaultColor = _a.defaultColor;
    var styles = styles_1.loaderStyles();
    var className = fullScreen ? styles.loaderContainerFull : styles.loaderContainer;
    return (react_1["default"].createElement(core_1.Grid, { container: true, item: true, xs: 12, className: className },
        react_1["default"].createElement(core_1.CircularProgress, { classes: { colorPrimary: !defaultColor ? styles.colorPrimary : styles.colorDefault } })));
};
exports["default"] = Loading;
