import React, { useMemo } from 'react';

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

var css_248z$1 = ".orb-main{animation:var(--main-hue-animation);background-image:radial-gradient(circle at 50% 30%,var(--main-bg-start) 0,var(--main-bg-end) 70%);border-radius:50%;box-shadow:var(--main-shadow);cursor:pointer;display:flex;height:var(--react-ai-orb-size);overflow:hidden;position:relative;width:var(--react-ai-orb-size)}.loc-a{position:absolute}.loc-b{left:10%}.loc-b,.loc-c{position:absolute;top:5%}.loc-c,.loc-d{left:5%}.loc-d{position:absolute;top:5%}.loc-glass{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.shape-a{animation:rotateDiagonal var(--animation-rotation-speed-base) linear infinite,hueShift var(--animation-hue-speed-base) linear infinite;background-image:radial-gradient(circle at 50% 90%,var(--shape-a-start) 0,var(--shape-a-end) 70%)}.shape-a,.shape-b{border-radius:50%;height:var(--shapes-size);transform-style:preserve-3d;width:var(--shapes-size)}.shape-b{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*.5) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*.5) linear infinite;background:radial-gradient(circle at 33% 12%,var(--shape-b-start) 0,var(--shape-b-middle) 26%,var(--shape-b-end) 63%);filter:blur(2px);mix-blend-mode:soft-light;will-change:transform}.shape-c{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*1) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*1) linear infinite;background-image:radial-gradient(circle at 31% 12%,var(--shape-c-start) 0,var(--shape-c-middle) 31%,var(--shape-c-end) 77%);mix-blend-mode:color-dodge;opacity:.65}.shape-c,.shape-d{border-radius:50%;filter:blur(1px);height:var(--shapes-size);transform-style:preserve-3d;width:var(--shapes-size)}.shape-d{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*1.5) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*1.5) linear infinite;background-image:radial-gradient(circle at 12% 80%,var(--shape-d-start) 0,var(--shape-d-middle) 31%,var(--shape-d-end) 77%);mix-blend-mode:color;opacity:.55}.glass{background:transparent;border-radius:50%;box-shadow:inset 0 -1px 6px 1px hsla(0,0%,100%,.5),inset 0 3px 4px 0 hsla(0,0%,100%,.5);height:var(--shapes-size);opacity:.8;width:var(--shapes-size)}.blob-a{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*2) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*2) linear infinite;mix-blend-mode:screen;opacity:var(--blob-a-opacity)}.blob-b{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*2.5) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*2.5) linear infinite;mix-blend-mode:lighten;opacity:var(--blob-b-opacity)}.blob-b,.blob-shine{position:absolute;top:0}.blob-shine{fill:#fff;animation:expand 3.5s linear infinite;filter:blur(15px);mix-blend-mode:hard-light;opacity:.9;transform:scale(.4)}.shine-b{animation:expand-b 5s ease-in-out infinite;left:15%;mix-blend-mode:plus-lighter;opacity:.3}@keyframes expand{0%{transform:scale(.4)}50%{transform:scale(.1)}to{transform:scale(.4)}}@keyframes expand-b{0%{transform:scale(.6)}50%{transform:scale(.1)}to{transform:scale(.6)}}@keyframes rotateDiagonal{0%{transform:rotate3d(1,1,1,0deg)}to{transform:rotate3d(1,1,1,1turn)}}@keyframes hueShift{0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(var(--hue-rotation))}to{filter:hue-rotate(0deg)}}@keyframes circleAnimation{0%{transform:rotate(-120deg)}50%{transform:rotate(0)}to{transform:rotate(-120deg)}}";
styleInject(css_248z$1);

var css_248z = ":root{--react-ai-orb-size:240px;--shapes-size:180px;--animation-rotation-speed-base:1s;--animation-hue-speed-base:1s;--main-bg-start:#ec85ff;--main-bg-end:#318aff;--shadow-color-1:rgba(166,35,248,0);--shadow-color-2:rgba(121,19,255,.5);--shadow-color-3:hsla(0,0%,100%,.9);--shadow-color-4:#fda4fa;--shape-a-start:#85d2ff;--shape-a-end:rgba(115,49,255,0);--shape-b-start:#fef5fe;--shape-b-middle:#fd6dff;--shape-b-end:rgba(203,56,255,0);--shape-c-start:hsla(0,0%,100%,0);--shape-c-middle:rgba(254,111,255,0);--shape-c-end:#7006fe;--shape-d-start:hsla(0,0%,100%,0);--shape-d-middle:rgba(142,111,255,0);--shape-d-end:#0ef;--blob-a-opacity:.3;--blob-b-opacity:.8;--hue-rotation:120deg;--main-hue-animation:none;--main-shadow:var(--shadow-color-1) 0 4px 6px 0,var(--shadow-color-2) 0 5px 10px 0,var(--shadow-color-3) 0 0 1px 0 inset,var(--shadow-color-4) 0 1px 7px 0 inset}.orb-main{animation:var(--main-hue-animation);background-image:radial-gradient(circle at 50% 30%,var(--main-bg-start)0,var(--main-bg-end)70%);border-radius:50%;box-shadow:var(--main-shadow);cursor:pointer;display:flex;height:var(--react-ai-orb-size);overflow:hidden;position:relative;width:var(--react-ai-orb-size)}.loc-a{position:absolute}.loc-b{left:10%}.loc-b,.loc-c{position:absolute;top:5%}.loc-c,.loc-d{left:5%}.loc-d{position:absolute;top:5%}.loc-glass{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.shape-a,.shape-b,.shape-c,.shape-d{border-radius:50%;height:var(--shapes-size);transform-style:preserve-3d;width:var(--shapes-size)}.shape-a{animation:rotateDiagonal var(--animation-rotation-speed-base) linear infinite,hueShift var(--animation-hue-speed-base) linear infinite;background-image:radial-gradient(circle at 50% 90%,var(--shape-a-start)0,var(--shape-a-end)70%)}.shape-b{animation:rotateDiagonal calc(var(--animation-rotation-speed-base)*1.5) linear infinite,hueShift calc(var(--animation-hue-speed-base)*1.5) linear infinite;background:radial-gradient(circle at 33% 12%,var(--shape-b-start)0,var(--shape-b-middle)26%,var(--shape-b-end)63%);filter:blur(2px);mix-blend-mode:soft-light}.shape-c{animation:rotateDiagonal calc(var(--animation-rotation-speed-base)*2) linear infinite,hueShift calc(var(--animation-hue-speed-base)*2) linear infinite;background-image:radial-gradient(circle at 31% 12%,var(--shape-c-start)0,var(--shape-c-middle)31%,var(--shape-c-end)77%);filter:blur(1px);mix-blend-mode:color-dodge;opacity:.65}.shape-d{animation:rotateDiagonal calc(var(--animation-rotation-speed-base)*2.5) linear infinite,hueShift calc(var(--animation-hue-speed-base)*2.5) linear infinite;background-image:radial-gradient(circle at 12% 80%,var(--shape-d-start)0,var(--shape-d-middle)31%,var(--shape-d-end)77%);filter:blur(1px);mix-blend-mode:color;opacity:.55}.glass{background:transparent;border-radius:50%;box-shadow:inset 0 -1px 6px 1px hsla(0,0%,100%,.5),inset 0 3px 4px 0 hsla(0,0%,100%,.5);height:var(--shapes-size);opacity:.8;width:var(--shapes-size)}.blob-a{animation:rotateDiagonal calc(var(--animation-rotation-speed-base)*3) linear infinite,hueShift calc(var(--animation-hue-speed-base)*3) linear infinite;mix-blend-mode:screen;opacity:var(--blob-a-opacity)}.blob-b{animation:rotateDiagonal calc(var(--animation-rotation-speed-base)*3.5) linear infinite,hueShift calc(var(--animation-hue-speed-base)*3.5) linear infinite;mix-blend-mode:lighten;opacity:var(--blob-b-opacity)}.blob-b,.blob-shine{position:absolute;top:0}.blob-shine{fill:#fff;animation:expand 3.5s linear infinite;filter:blur(15px);mix-blend-mode:hard-light;opacity:.9;transform:scale(.4)}.shine-b{animation:expand-b 5s ease-in-out infinite;left:15%;mix-blend-mode:plus-lighter;opacity:.3}@keyframes rotateDiagonal{0%{transform:rotate3d(1,1,1,0deg)}to{transform:rotate3d(1,1,1,1turn)}}@keyframes hueShift{0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(var(--hue-rotation))}to{filter:hue-rotate(0deg)}}@keyframes expand{0%{transform:scale(.4)}50%{transform:scale(.1)}to{transform:scale(.4)}}@keyframes expand-b{0%{transform:scale(.6)}50%{transform:scale(.1)}to{transform:scale(.6)}}";
styleInject(css_248z);

const SvgElements = ({ color1, color2 }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-a" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "blob-a-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React.createElement("stop", { id: "stop1", stopColor: color1, offset: "0%" }),
                    React.createElement("stop", { id: "stop2", stopColor: color2, offset: "100%" }))),
            React.createElement("path", { fill: "url(#blob-a-gradient)", d: "M23.3,-31.9C28.4,-28.4,29.5,-19.2,31.1,-10.9C32.6,-2.6,34.7,4.7,33.5,11.7C32.3,18.6,27.8,25.3,21.6,28.8C15.5,32.3,7.8,32.6,-0.6,33.5C-9,34.4,-18.1,35.8,-24.8,32.5C-31.5,29.2,-35.9,21.2,-36.5,13.3C-37.2,5.4,-34.1,-2.4,-31.6,-10.4C-29.1,-18.3,-27.2,-26.6,-22.1,-30.1C-16.9,-33.6,-8.4,-32.3,0.3,-32.8C9.1,-33.3,18.2,-35.4,23.3,-31.9Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } })),
        React.createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-b" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "blob-b-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React.createElement("stop", { id: "stop1", stopColor: color1, offset: "0%" }),
                    React.createElement("stop", { id: "stop2", stopColor: color2, offset: "100%" }))),
            React.createElement("path", { fill: "url(#blob-b-gradient)", d: "M19.2,-27.1C25.6,-29.4,32.3,-26,33.8,-20.5C35.3,-15,31.7,-7.5,27.8,-2.2C23.9,3,19.8,6,16.8,8.9C13.8,11.8,11.9,14.6,9.3,18.8C6.7,23,3.3,28.6,-0.7,29.8C-4.7,31,-9.4,27.8,-16.7,26.2C-23.9,24.7,-33.6,24.8,-39.3,20.7C-45.1,16.7,-47,8.3,-45.4,0.9C-43.8,-6.5,-38.8,-13,-32.6,-16.3C-26.4,-19.6,-18.9,-19.7,-13.3,-17.9C-7.6,-16,-3.8,-12.2,1.3,-14.4C6.3,-16.6,12.7,-24.8,19.2,-27.1Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } })),
        React.createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-shine" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "blob-shine-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React.createElement("stop", { id: "stop1", stopColor: "white", offset: "0%" }))),
            React.createElement("path", { fill: "url(#blob-shine-gradient)", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } })),
        React.createElement("svg", { id: "sw-js-blob-svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-shine shine-b" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "blob-shine-gradient", x1: "0", x2: "1", y1: "1", y2: "0" },
                    React.createElement("stop", { id: "stop1", stopColor: "white", offset: "0%" }))),
            React.createElement("path", { fill: "url(#blob-shine-gradient)", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0", style: { transition: "0.3s" } }))));
};

const colorPalettes = {
    cosmicNebula: {
        mainBgStart: "rgb(236, 133, 255)",
        mainBgEnd: "rgb(49, 138, 255)",
        shadowColor1: "rgba(166, 35, 248, 0)",
        shadowColor2: "rgba(121, 19, 255, 0.5)",
        shadowColor3: "rgba(255, 255, 255, 0.9)",
        shadowColor4: "rgb(253, 164, 250)",
        shapeAStart: "rgb(133, 210, 255)",
        shapeAEnd: "rgba(115, 49, 255, 0)",
        shapeBStart: "rgb(254, 245, 254)",
        shapeBMiddle: "rgb(253, 109, 255)",
        shapeBEnd: "rgba(203, 56, 255, 0)",
        shapeCStart: "rgba(254, 254, 254, 0)",
        shapeCMiddle: "rgba(254, 111, 255, 0)",
        shapeCEnd: "#7006fe",
        shapeDStart: "rgba(254, 254, 254, 0)",
        shapeDMiddle: "rgba(142, 111, 255, 0)",
        shapeDEnd: "#00eeff",
    },
    caribean: {
        mainBgStart: "rgb(64, 224, 208)",
        mainBgEnd: "rgb(76, 189, 255)",
        shadowColor1: "rgba(8, 226, 255, 0)",
        shadowColor2: "rgba(43, 173, 216, 0.5)",
        shadowColor3: "rgba(255, 255, 255, 0.9)",
        shadowColor4: "rgb(72, 209, 204)",
        shapeAStart: "rgb(127, 255, 212)",
        shapeAEnd: "rgba(0, 105, 148, 0)",
        shapeBStart: "rgb(240, 241, 255)",
        shapeBMiddle: "rgb(64, 224, 208)",
        shapeBEnd: "rgba(0, 128, 128, 0)",
        shapeCStart: "rgba(224, 255, 255, 0)",
        shapeCMiddle: "rgba(32, 178, 170, 0)",
        shapeCEnd: "#006064",
        shapeDStart: "rgba(224, 255, 255, 0)",
        shapeDMiddle: "rgba(45, 8, 255, 0)",
        shapeDEnd: "#00838f",
    },
    cherryBlossom: {
        mainBgStart: "rgb(255, 204, 229)",
        mainBgEnd: "rgb(255, 102, 153)",
        shadowColor1: "rgba(255, 153, 204, 0)",
        shadowColor2: "rgba(255, 102, 178, 0.5)",
        shadowColor3: "rgba(255, 255, 255, 0.9)",
        shadowColor4: "rgb(255, 183, 197)",
        shapeAStart: "rgb(255, 228, 240)",
        shapeAEnd: "rgba(255, 140, 189, 0)",
        shapeBStart: "rgb(255, 240, 245)",
        shapeBMiddle: "rgb(255, 105, 180)",
        shapeBEnd: "rgba(255, 20, 147, 0)",
        shapeCStart: "rgba(255, 250, 250, 0)",
        shapeCMiddle: "rgba(255, 182, 193, 0)",
        shapeCEnd: "#FF69B4",
        shapeDStart: "rgba(255, 245, 247, 0)",
        shapeDMiddle: "rgba(255, 92, 143, 0)",
        shapeDEnd: "#FF1493",
    },
    galaxy: {
        mainBgStart: "rgb(40, 40, 99)",
        mainBgEnd: "rgb(50, 50, 100)",
        shadowColor1: "rgba(166, 35, 248, 0)",
        shadowColor2: "rgba(121, 19, 255, 0.5)",
        shadowColor3: "rgba(255, 255, 255, 0.9)",
        shadowColor4: "rgb(253, 164, 250)",
        shapeAStart: "rgb(133, 210, 255)",
        shapeAEnd: "rgba(115, 49, 255, 0)",
        shapeBStart: "rgb(254, 245, 254)",
        shapeBMiddle: "rgb(253, 109, 255)",
        shapeBEnd: "rgba(203, 56, 255, 0)",
        shapeCStart: "rgba(254, 254, 254, 0)",
        shapeCMiddle: "rgba(254, 111, 255, 0)",
        shapeCEnd: "#7006fe",
        shapeDStart: "rgba(254, 254, 254, 0)",
        shapeDMiddle: "rgba(142, 111, 255, 0)",
        shapeDEnd: "#00eeff",
    },
    oceanDepths: {
        mainBgStart: "rgb(4, 63, 255)",
        mainBgEnd: "rgb(17, 19, 82)",
        shadowColor1: "rgba(0, 149, 182, 0)",
        shadowColor2: "rgba(0, 96, 128, 0.5)",
        shadowColor3: "rgba(255, 255, 255, 0.9)",
        shadowColor4: "rgb(72, 209, 204)",
        shapeAStart: "rgb(127, 255, 212)",
        shapeAEnd: "rgba(0, 105, 148, 0)",
        shapeBStart: "rgb(240, 255, 255)",
        shapeBMiddle: "rgb(64, 224, 208)",
        shapeBEnd: "rgba(0, 128, 128, 0)",
        shapeCStart: "rgba(224, 255, 255, 0)",
        shapeCMiddle: "rgba(32, 178, 170, 0)",
        shapeCEnd: "#006064",
        shapeDStart: "rgba(224, 255, 255, 0)",
        shapeDMiddle: "rgba(0, 128, 128, 0)",
        shapeDEnd: "#00838f",
    },
    emerald: {
        mainBgStart: "rgb(46, 204, 113)",
        mainBgEnd: "rgb(39, 174, 96)",
        shadowColor1: "rgba(0, 128, 64, 0)",
        shadowColor2: "rgba(46, 204, 113, 0.5)",
        shadowColor3: "rgba(255, 255, 255, 0.8)",
        shadowColor4: "rgb(88, 214, 141)",
        shapeAStart: "rgb(102, 255, 178)",
        shapeAEnd: "rgba(39, 174, 96, 0)",
        shapeBStart: "rgb(153, 255, 204)",
        shapeBMiddle: "rgb(46, 204, 113)",
        shapeBEnd: "rgba(0, 128, 64, 0)",
        shapeCStart: "rgba(230, 255, 240, 0)",
        shapeCMiddle: "rgba(102, 255, 178, 0.3)",
        shapeCEnd: "#2ECC71",
        shapeDStart: "rgba(240, 255, 250, 0)",
        shapeDMiddle: "rgba(88, 214, 141, 0.4)",
        shapeDEnd: "#1E8449",
    },
    goldenGlow: {
        mainBgStart: "rgb(255, 204, 0)",
        mainBgEnd: "rgb(255, 165, 0)",
        shadowColor1: "rgba(255, 215, 0, 0)",
        shadowColor2: "rgba(255, 215, 0, 0.5)",
        shadowColor3: "rgba(255, 255, 255, 0.8)",
        shadowColor4: "rgb(255, 140, 0)",
        shapeAStart: "rgb(255, 233, 100)",
        shapeAEnd: "rgba(255, 215, 0, 0)",
        shapeBStart: "rgb(255, 210, 80)",
        shapeBMiddle: "rgb(255, 180, 50)",
        shapeBEnd: "rgba(255, 140, 0, 0)",
        shapeCStart: "rgba(255, 255, 255, 0)",
        shapeCMiddle: "rgba(255, 245, 100, 0.5)",
        shapeCEnd: "#FFD700",
        shapeDStart: "rgba(255, 255, 255, 0)",
        shapeDMiddle: "rgba(255, 215, 0, 0.5)",
        shapeDEnd: "#FFB800",
    },
    volcanic: {
        mainBgStart: "rgb(50, 10, 0)",
        mainBgEnd: "rgb(150, 20, 0)",
        shadowColor1: "rgba(255, 69, 0, 0)",
        shadowColor2: "rgba(255, 69, 0, 0.4)",
        shadowColor3: "rgba(255, 140, 0, 0.7)",
        shadowColor4: "rgb(255, 0, 0)",
        shapeAStart: "rgb(255, 87, 34)",
        shapeAEnd: "rgba(255, 69, 0, 0)",
        shapeBStart: "rgb(255, 99, 71)",
        shapeBMiddle: "rgb(255, 69, 0)",
        shapeBEnd: "rgba(200, 0, 0, 0)",
        shapeCStart: "rgba(255, 87, 34, 0.5)",
        shapeCMiddle: "rgba(255, 140, 0, 0.7)",
        shapeCEnd: "rgba(255, 69, 0, 1)",
        shapeDStart: "rgba(50, 10, 0, 0.5)",
        shapeDMiddle: "rgba(200, 30, 10, 0.7)",
        shapeDEnd: "rgba(255, 69, 0, 0.8)",
    },
};

const baseOrbSize = 82; // Base size of the main orb in px
const baseShapeSize = 72; // Base size of the inner shapes in px
const defaultSize = 1;
const defaultAnimationSpeedBase = 1;
const defaultAnimationSpeedHue = 1;
const defaultHueRotation = 120;
const defaultMainOrbHueAnimation = false;
const defaultBlobAOpacity = 0.3;
const defaultBlobBOpacity = 0.8;
const defaultNoShadowValue = false;

const Orb = ({ palette = colorPalettes.cosmicNebula, size = defaultSize, animationSpeedBase = defaultAnimationSpeedBase, animationSpeedHue = defaultAnimationSpeedHue, hueRotation = defaultHueRotation, mainOrbHueAnimation = defaultMainOrbHueAnimation, blobAOpacity = defaultBlobAOpacity, blobBOpacity = defaultBlobBOpacity, noShadow = defaultNoShadowValue, }) => {
    useMemo(() => ({
        "--react-ai-orb-size": `${size * baseOrbSize}px`,
        "--shapes-size": `${size * baseShapeSize}px`,
        "--main-bg-start": palette.mainBgStart,
        "--main-bg-end": palette.mainBgEnd,
        "--shadow-color-1": palette.shadowColor1,
        "--shadow-color-2": palette.shadowColor2,
        "--shadow-color-3": palette.shadowColor3,
        "--shadow-color-4": palette.shadowColor4,
        "--main-shadow": noShadow
            ? "none"
            : `var(--shadow-color-1) 0px 4px 6px 0px,
             var(--shadow-color-2) 0px 5px 10px 0px,
             var(--shadow-color-3) 0px 0px 1px 0px inset,
             var(--shadow-color-4) 0px 1px 7px 0px inset`,
        "--shape-a-start": palette.shapeAStart,
        "--shape-a-end": palette.shapeAEnd,
        "--shape-b-start": palette.shapeBStart,
        "--shape-b-middle": palette.shapeBMiddle,
        "--shape-b-end": palette.shapeBEnd,
        "--shape-c-start": palette.shapeCStart,
        "--shape-c-middle": palette.shapeCMiddle,
        "--shape-c-end": palette.shapeCEnd,
        "--shape-d-start": palette.shapeDStart,
        "--shape-d-middle": palette.shapeDMiddle,
        "--shape-d-end": palette.shapeDEnd,
        "--blob-a-opacity": blobAOpacity,
        "--blob-b-opacity": blobBOpacity,
        "--animation-rotation-speed-base": `${1 / (animationSpeedBase * 0.5)}s`,
        "--animation-hue-speed-base": `${1 / (animationSpeedHue * 0.5)}s`,
        "--hue-rotation": `${hueRotation}deg`,
        "--main-hue-animation": mainOrbHueAnimation
            ? "hueShift var(--animation-hue-speed-base) linear infinite"
            : "none",
    }), [
        palette,
        size,
        animationSpeedBase,
        animationSpeedHue,
        hueRotation,
        mainOrbHueAnimation,
        blobAOpacity,
        blobBOpacity,
    ]);
    return (React.createElement("div", { className: "orb-root" },
        React.createElement("div", { className: "orb-main" },
            React.createElement("div", { className: "glass loc-glass" }),
            React.createElement("div", { className: "shape-a loc-a" }),
            React.createElement("div", { className: "shape-b loc-b" }),
            React.createElement("div", { className: "shape-c loc-c" }),
            React.createElement("div", { className: "shape-d loc-d" }),
            React.createElement(SvgElements, { color1: palette.mainBgStart, color2: palette.mainBgEnd }))));
};

const oceanDepthsPreset = {
    palette: colorPalettes.oceanDepths,
    blobBOpacity: 0.3,
    size: defaultSize,
    animationSpeedBase: defaultAnimationSpeedBase,
    animationSpeedHue: defaultAnimationSpeedHue,
    hueRotation: defaultHueRotation,
    mainOrbHueAnimation: defaultMainOrbHueAnimation,
};
const galaxyPreset = {
    palette: colorPalettes.galaxy,
    blobBOpacity: 0.3,
    size: defaultSize,
    animationSpeedBase: 1.3,
    animationSpeedHue: defaultAnimationSpeedHue,
    hueRotation: 360,
    mainOrbHueAnimation: defaultMainOrbHueAnimation,
};
const caribeanPreset = {
    palette: colorPalettes.caribean,
    size: defaultSize,
    animationSpeedBase: defaultAnimationSpeedBase,
    animationSpeedHue: defaultAnimationSpeedHue,
    hueRotation: defaultHueRotation,
    mainOrbHueAnimation: defaultMainOrbHueAnimation,
};
const cherryBlossomPreset = {
    palette: colorPalettes.cherryBlossom,
    size: defaultSize,
    animationSpeedBase: defaultAnimationSpeedBase,
    animationSpeedHue: defaultAnimationSpeedHue,
    hueRotation: 0,
    mainOrbHueAnimation: defaultMainOrbHueAnimation,
};
const emeraldPreset = {
    palette: colorPalettes.emerald,
    size: defaultSize,
    animationSpeedBase: defaultAnimationSpeedBase,
    animationSpeedHue: defaultAnimationSpeedHue,
    hueRotation: 0,
    blobBOpacity: 0.2,
    mainOrbHueAnimation: defaultMainOrbHueAnimation,
};
const multiColorPreset = {
    palette: colorPalettes.cosmicNebula,
    size: defaultSize,
    animationSpeedBase: defaultAnimationSpeedBase,
    animationSpeedHue: 0.25,
    hueRotation: defaultHueRotation,
    mainOrbHueAnimation: true,
};
const goldenGlowPreset = {
    palette: colorPalettes.goldenGlow,
    blobBOpacity: 0.3,
    hueRotation: 0,
};
const volcanicPreset = {
    palette: colorPalettes.volcanic,
    blobBOpacity: 0.3,
    hueRotation: 0,
};

export { Orb, caribeanPreset, cherryBlossomPreset, colorPalettes, emeraldPreset, galaxyPreset, goldenGlowPreset, multiColorPreset, oceanDepthsPreset, volcanicPreset };
