'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".main{background-image:radial-gradient(circle at 50% 30%,#ec85ff 0,#7331ff 70%);box-shadow:0 4px 6px 0 rgba(166,35,248,0),0 5px 10px 0 rgba(121,19,255,.5),inset 0 0 1px 0 hsla(0,0%,100%,.9),inset 0 1px 7px 0 #fda4fa;cursor:pointer;height:82px;overflow:hidden;transform:none;width:82px}.in,.main{border-radius:50%}.in{background-image:radial-gradient(circle at 50% 90%,#85d2ff 0,rgba(115,49,255,0) 70%);height:100%;left:0;top:0;width:100%}";
styleInject(css_248z);

const Orb = ({ size = 200, color = "purple" }) => {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "main" },
            React__default["default"].createElement("div", { className: "in" }))));
};

exports.Orb = Orb;
