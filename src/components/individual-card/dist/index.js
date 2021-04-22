"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("./styles");
var clsx_1 = require("clsx");
var IndividualCard = function (_a) {
    var close = _a.close, complete = _a.complete, click = _a.click, framework = _a.framework;
    var _b = react_1.useState(close), closed = _b[0], setClosed = _b[1];
    react_1.useEffect(function () {
        setClosed(close);
    }, [close, complete, click, framework]);
    var styles = styles_1["default"]();
    /**
     * Action to be performed on the click of the card.
     * @param  {String} framework - Name of the framework
     * @return {void}
    */
    var clicked = function (framework) {
        if (close) {
            setClosed(false);
        }
        click(framework);
    };
    return (react_1["default"].createElement(core_1.Grid, { className: styles.root },
        react_1["default"].createElement(core_1.Grid, { className: clsx_1["default"](!closed ? 'opened' : '', complete ? 'matched' : ''), onClick: function () { return clicked(framework); } }, !closed || (closed && complete) ? (react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("img", { className: "image-loaded", src: process.env.PUBLIC_URL + "/assets/logos/" + framework + ".png", alt: framework }))) : (react_1["default"].createElement(core_1.Grid, { xs: 12, className: "question-mark" },
            react_1["default"].createElement("p", null, "?"))))));
};
exports["default"] = IndividualCard;
