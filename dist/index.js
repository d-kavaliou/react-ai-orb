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

var css_248z = ":root{--main-bg-start:#ec85ff;--main-bg-end:#318aff;--shape-a-start:#85d2ff;--shape-a-end:rgba(115,49,255,0);--shape-b-start:#fef5fe;--shape-b-middle:#fd6dff;--shape-b-end:rgba(203,56,255,0);--shape-c-start:hsla(0,0%,100%,0);--shape-c-middle:rgba(254,111,255,0);--shape-c-end:#7006fe;--shape-d-start:hsla(0,0%,100%,0);--shape-d-middle:rgba(142,111,255,0);--shape-d-end:#0ef;--animation-speed-rotate:2s;--animation-speed-hue:2s}.orb-main{background-image:radial-gradient(circle at 50% 30%,var(--main-bg-start) 0,var(--main-bg-end) 70%);border-radius:50%;box-shadow:0 4px 6px 0 rgba(166,35,248,0),0 5px 10px 0 rgba(121,19,255,.5),inset 0 0 1px 0 hsla(0,0%,100%,.9),inset 0 1px 7px 0 #fda4fa;cursor:pointer;height:82px;overflow:hidden;position:relative;width:82px}.loc-a{position:absolute}.loc-b{left:10%}.loc-b,.loc-c{position:absolute;top:5%}.loc-c,.loc-d{left:5%}.loc-d{position:absolute;top:5%}.loc-glass{left:7%;position:absolute;top:6%}.shape-a{animation:rotateDiagonal 2s linear infinite,hueShift 2s linear infinite;background-image:radial-gradient(circle at 50% 90%,var(--shape-a-start) 0,var(--shape-a-end) 70%)}.shape-a,.shape-b{border-radius:50%;height:72px;transform-style:preserve-3d;width:72px}.shape-b{animation:circleAnimation 3s linear infinite,hueShift 3s linear infinite;background:radial-gradient(circle at 33% 12%,var(--shape-b-start) 0,var(--shape-b-middle) 26%,var(--shape-b-end) 63%);filter:blur(2px);mix-blend-mode:soft-light;will-change:transform}.shape-c{animation:rotateDiagonal 4s linear infinite,hueShift 4s linear infinite;background-image:radial-gradient(circle at 31% 12%,var(--shape-c-start) 0,var(--shape-c-middle) 31%,var(--shape-c-end) 77%);mix-blend-mode:color-dodge;opacity:.65}.shape-c,.shape-d{border-radius:50%;filter:blur(1px);height:72px;transform-style:preserve-3d;width:72px}.shape-d{animation:rotateDiagonal 5s linear infinite,hueShift 5s linear infinite;background-image:radial-gradient(circle at 12% 80%,var(--shape-d-start) 0,var(--shape-d-middle) 31%,var(--shape-d-end) 77%);mix-blend-mode:color;opacity:.55}.glass{background:transparent;border-radius:50%;box-shadow:inset 0 -1px 6px 1px hsla(0,0%,100%,.5),inset 0 3px 4px 0 hsla(0,0%,100%,.5);height:72px;opacity:.8;width:72px}.blob-a{animation:rotateDiagonal 6s linear infinite,hueShift 6s linear infinite;mix-blend-mode:screen;opacity:.3}.blob-b{animation:rotateDiagonal 7s linear infinite,hueShift 7s linear infinite;mix-blend-mode:lighten;opacity:.8}.blob-b,.blob-shine{position:absolute;top:0}.blob-shine{fill:#fff;animation:expand 3.5s linear infinite;filter:blur(15px);mix-blend-mode:hard-light;opacity:.9;transform:scale(.4)}.shine-b{animation:expand-b 5s ease-in-out infinite;left:15%;mix-blend-mode:plus-lighter;opacity:.3}@keyframes expand{0%{transform:scale(.4)}50%{transform:scale(.1)}to{transform:scale(.4)}}@keyframes expand-b{0%{transform:scale(.6)}50%{transform:scale(.1)}to{transform:scale(.6)}}@keyframes rotateDiagonal{0%{transform:rotate3d(1,1,1,0deg)}to{transform:rotate3d(1,1,1,1turn)}}@keyframes hueShift{0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(120deg)}to{filter:hue-rotate(0deg)}}@keyframes circleAnimation{0%{transform:rotate(-120deg)}50%{transform:rotate(0)}to{transform:rotate(-120deg)}}";
styleInject(css_248z);

const SvgElements = () => {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-a" },
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: "blob-a-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React__default["default"].createElement("stop", { id: "stop1", stopColor: "rgba(248, 117, 55, 1)", offset: "0%" }),
                    React__default["default"].createElement("stop", { id: "stop2", stopColor: "rgba(251, 168, 31, 1)", offset: "100%" }))),
            React__default["default"].createElement("path", { fill: "url(#blob-a-gradient)", d: "M23.3,-31.9C28.4,-28.4,29.5,-19.2,31.1,-10.9C32.6,-2.6,34.7,4.7,33.5,11.7C32.3,18.6,27.8,25.3,21.6,28.8C15.5,32.3,7.8,32.6,-0.6,33.5C-9,34.4,-18.1,35.8,-24.8,32.5C-31.5,29.2,-35.9,21.2,-36.5,13.3C-37.2,5.4,-34.1,-2.4,-31.6,-10.4C-29.1,-18.3,-27.2,-26.6,-22.1,-30.1C-16.9,-33.6,-8.4,-32.3,0.3,-32.8C9.1,-33.3,18.2,-35.4,23.3,-31.9Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } })),
        React__default["default"].createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-b" },
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: "sw-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React__default["default"].createElement("stop", { id: "stop1", stopColor: "rgba(248, 117, 55, 1)", offset: "0%" }),
                    React__default["default"].createElement("stop", { id: "stop2", stopColor: "rgba(251, 168, 31, 1)", offset: "100%" }))),
            React__default["default"].createElement("path", { fill: "url(#sw-gradient)", d: "M19.2,-27.1C25.6,-29.4,32.3,-26,33.8,-20.5C35.3,-15,31.7,-7.5,27.8,-2.2C23.9,3,19.8,6,16.8,8.9C13.8,11.8,11.9,14.6,9.3,18.8C6.7,23,3.3,28.6,-0.7,29.8C-4.7,31,-9.4,27.8,-16.7,26.2C-23.9,24.7,-33.6,24.8,-39.3,20.7C-45.1,16.7,-47,8.3,-45.4,0.9C-43.8,-6.5,-38.8,-13,-32.6,-16.3C-26.4,-19.6,-18.9,-19.7,-13.3,-17.9C-7.6,-16,-3.8,-12.2,1.3,-14.4C6.3,-16.6,12.7,-24.8,19.2,-27.1Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } })),
        React__default["default"].createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-shine" },
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: "blob-shine-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React__default["default"].createElement("stop", { id: "stop1", stopColor: "white", offset: "0%" }))),
            React__default["default"].createElement("path", { fill: "url(#blob-shine-gradient)", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } })),
        React__default["default"].createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-shine shine-b" },
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: "blob-shine-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React__default["default"].createElement("stop", { id: "stop1", stopColor: "white", offset: "0%" }))),
            React__default["default"].createElement("path", { fill: "url(#blob-shine-gradient)", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } }))));
};
const Orb = () => {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "orb-main" },
            React__default["default"].createElement("div", { className: "glass loc-glass" }),
            React__default["default"].createElement("div", { className: "shape-a loc-a" }),
            React__default["default"].createElement("div", { className: "shape-b loc-b" }),
            React__default["default"].createElement("div", { className: "shape-c loc-c" }),
            React__default["default"].createElement("div", { className: "shape-d loc-d" }),
            React__default["default"].createElement(SvgElements, null))));
};

exports.Orb = Orb;
