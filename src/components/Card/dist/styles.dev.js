"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _styles = require("../common/styles");

var useStyles = (0, _core.makeStyles)({
  root: {
    minHeight: '100vh',
    height: 'auto',
    width: '100vw',
    backgroundColor: _styles.themeColors.green,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .playground-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'inherit',
      width: '100%'
    },
    '& .unclickable': {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: '0.8'
    }
  }
});
var _default = useStyles;
exports["default"] = _default;