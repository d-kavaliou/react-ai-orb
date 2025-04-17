import React from 'react';

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

var css_248z$1 = "svg{--svg-gradient-cosmic-a-start:#ec85ff;--svg-gradient-cosmic-a-end:#318aff;--svg-gradient-cosmic-b-start:#ec85ff;--svg-gradient-cosmic-b-end:#318aff;--svg-gradient-caribean-a-start:#40e0d0;--svg-gradient-caribean-a-end:#4cbdff;--svg-gradient-caribean-b-start:#40e0d0;--svg-gradient-caribean-b-end:#4cbdff}.orb-main{animation:var(--main-hue-animation);background-image:radial-gradient(circle at 50% 30%,var(--main-bg-start) 0,var(--main-bg-end) 70%);border-radius:50%;box-shadow:var(--main-shadow);cursor:pointer;display:flex;height:var(--react-ai-orb-size);overflow:hidden;position:relative;width:var(--react-ai-orb-size)}.loc-a{position:absolute}.loc-b{left:10%}.loc-b,.loc-c{position:absolute;top:5%}.loc-c,.loc-d{left:5%}.loc-d{position:absolute;top:5%}.loc-glass{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.shape-a{animation:rotateDiagonal var(--animation-rotation-speed-base) linear infinite,hueShift var(--animation-hue-speed-base) linear infinite;background-image:radial-gradient(circle at 50% 90%,var(--shape-a-start) 0,var(--shape-a-end) 70%)}.shape-a,.shape-b{border-radius:50%;height:var(--shapes-size);transform-style:preserve-3d;width:var(--shapes-size)}.shape-b{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*.5) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*.5) linear infinite;background:radial-gradient(circle at 33% 12%,var(--shape-b-start) 0,var(--shape-b-middle) 26%,var(--shape-b-end) 63%);filter:blur(2px);mix-blend-mode:soft-light;will-change:transform}.shape-c{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*1) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*1) linear infinite;background-image:radial-gradient(circle at 31% 12%,var(--shape-c-start) 0,var(--shape-c-middle) 31%,var(--shape-c-end) 77%);mix-blend-mode:color-dodge;opacity:.65}.shape-c,.shape-d{border-radius:50%;filter:blur(1px);height:var(--shapes-size);transform-style:preserve-3d;width:var(--shapes-size)}.shape-d{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*1.5) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*1.5) linear infinite;background-image:radial-gradient(circle at 12% 80%,var(--shape-d-start) 0,var(--shape-d-middle) 31%,var(--shape-d-end) 77%);mix-blend-mode:color;opacity:.55}.glass{background:transparent;border-radius:50%;box-shadow:inset 0 -1px 6px 1px hsla(0,0%,100%,.5),inset 0 3px 4px 0 hsla(0,0%,100%,.5);height:var(--shapes-size);opacity:.8;width:var(--shapes-size)}.blob-a{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*2) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*2) linear infinite;mix-blend-mode:screen;opacity:var(--blob-a-opacity)}.blob-b{animation:rotateDiagonal calc(var(--animation-rotation-speed-base) + var(--animation-rotation-speed-base)*2.5) linear infinite,hueShift calc(var(--animation-hue-speed-base) + var(--animation-hue-speed-base)*2.5) linear infinite;mix-blend-mode:lighten;opacity:var(--blob-b-opacity)}.blob-b,.blob-shine{position:absolute;top:0}.blob-shine{fill:#fff;animation:expand 3.5s linear infinite;filter:blur(15px);mix-blend-mode:hard-light;opacity:.9;transform:scale(.4)}.shine-b{animation:expand-b 5s ease-in-out infinite;left:15%;mix-blend-mode:plus-lighter;opacity:.3}@keyframes expand{0%{transform:scale(.4)}50%{transform:scale(.1)}to{transform:scale(.4)}}@keyframes expand-b{0%{transform:scale(.6)}50%{transform:scale(.1)}to{transform:scale(.6)}}@keyframes rotateDiagonal{0%{transform:rotate3d(1,1,1,0deg)}to{transform:rotate3d(1,1,1,1turn)}}@keyframes hueShift{0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(var(--hue-rotation))}to{filter:hue-rotate(0deg)}}@keyframes circleAnimation{0%{transform:rotate(-120deg)}50%{transform:rotate(0)}to{transform:rotate(-120deg)}}";
styleInject(css_248z$1);

var css_248z = ".orb-size-xs{--react-ai-orb-size:41px;--shapes-size:36px}.orb-size-sm{--react-ai-orb-size:62px;--shapes-size:54px}.orb-size-md{--react-ai-orb-size:82px;--shapes-size:72px}.orb-size-lg{--react-ai-orb-size:143px;--shapes-size:126px}.orb-size-xl{--react-ai-orb-size:205px;--shapes-size:180px}.orb-size-xxl{--react-ai-orb-size:246px;--shapes-size:216px}.orb-speed-slow{--animation-rotation-speed-base:4s;--animation-hue-speed-base:4s}.orb-speed-medium{--animation-rotation-speed-base:2s;--animation-hue-speed-base:2s}.orb-speed-fast{--animation-rotation-speed-base:1s;--animation-hue-speed-base:1s}.orb-speed-very-fast{--animation-rotation-speed-base:0.5s;--animation-hue-speed-base:0.5s}.orb-hue-small{--hue-rotation:60deg}.orb-hue-medium{--hue-rotation:120deg}.orb-hue-large{--hue-rotation:240deg}.orb-hue-full{--hue-rotation:360deg}.blob-a-opacity-10{--blob-a-opacity:0.1}.blob-a-opacity-30{--blob-a-opacity:0.3}.blob-a-opacity-50{--blob-a-opacity:0.5}.blob-a-opacity-70{--blob-a-opacity:0.7}.blob-a-opacity-90{--blob-a-opacity:0.9}.blob-b-opacity-10{--blob-b-opacity:0.1}.blob-b-opacity-30{--blob-b-opacity:0.3}.blob-b-opacity-50{--blob-b-opacity:0.5}.blob-b-opacity-70{--blob-b-opacity:0.7}.blob-b-opacity-90{--blob-b-opacity:0.9}.orb-main-hue-animated{--main-hue-animation:hueShift var(--animation-hue-speed-base) linear infinite}.orb-no-shadow{--main-shadow:none}.orb-palette-cosmicNebula{--main-bg-start:#ec85ff;--main-bg-end:#318aff;--shadow-color-1:rgba(166,35,248,0);--shadow-color-2:rgba(121,19,255,.5);--shadow-color-3:hsla(0,0%,100%,.9);--shadow-color-4:#fda4fa;--shape-a-start:#85d2ff;--shape-a-end:rgba(115,49,255,0);--shape-b-start:#fef5fe;--shape-b-middle:#fd6dff;--shape-b-end:rgba(203,56,255,0);--shape-c-start:hsla(0,0%,100%,0);--shape-c-middle:rgba(254,111,255,0);--shape-c-end:#7006fe;--shape-d-start:hsla(0,0%,100%,0);--shape-d-middle:rgba(142,111,255,0);--shape-d-end:#0ef}.orb-palette-caribean{--main-bg-start:#40e0d0;--main-bg-end:#4cbdff;--shadow-color-1:rgba(8,226,255,0);--shadow-color-2:rgba(43,173,216,.5);--shadow-color-3:hsla(0,0%,100%,.9);--shadow-color-4:#48d1cc;--shape-a-start:#7fffd4;--shape-a-end:rgba(0,105,148,0);--shape-b-start:#f0f1ff;--shape-b-middle:#40e0d0;--shape-b-end:rgba(0,128,128,0);--shape-c-start:rgba(224,255,255,0);--shape-c-middle:rgba(32,178,170,0);--shape-c-end:#006064;--shape-d-start:rgba(224,255,255,0);--shape-d-middle:rgba(45,8,255,0);--shape-d-end:#00838f}.orb-palette-cherryBlossom{--main-bg-start:#ffcce5;--main-bg-end:#f69;--shadow-color-1:rgba(255,153,204,0);--shadow-color-2:rgba(255,102,178,.5);--shadow-color-3:hsla(0,0%,100%,.9);--shadow-color-4:#ffb7c5;--shape-a-start:#ffe4f0;--shape-a-end:rgba(255,140,189,0);--shape-b-start:#fff0f5;--shape-b-middle:#ff69b4;--shape-b-end:rgba(255,20,147,0);--shape-c-start:hsla(0,100%,99%,0);--shape-c-middle:rgba(255,182,193,0);--shape-c-end:#ff69b4;--shape-d-start:rgba(255,245,247,0);--shape-d-middle:rgba(255,92,143,0);--shape-d-end:#ff1493}.orb-palette-galaxy{--main-bg-start:#282863;--main-bg-end:#323264;--shadow-color-1:rgba(166,35,248,0);--shadow-color-2:rgba(121,19,255,.5);--shadow-color-3:hsla(0,0%,100%,.9);--shadow-color-4:#fda4fa;--shape-a-start:#85d2ff;--shape-a-end:rgba(115,49,255,0);--shape-b-start:#fef5fe;--shape-b-middle:#fd6dff;--shape-b-end:rgba(203,56,255,0);--shape-c-start:hsla(0,0%,100%,0);--shape-c-middle:rgba(254,111,255,0);--shape-c-end:#7006fe;--shape-d-start:hsla(0,0%,100%,0);--shape-d-middle:rgba(142,111,255,0);--shape-d-end:#0ef}.orb-palette-oceanDepths{--main-bg-start:#043fff;--main-bg-end:#111352;--shadow-color-1:rgba(0,149,182,0);--shadow-color-2:rgba(0,96,128,.5);--shadow-color-3:hsla(0,0%,100%,.9);--shadow-color-4:#48d1cc;--shape-a-start:#7fffd4;--shape-a-end:rgba(0,105,148,0);--shape-b-start:azure;--shape-b-middle:#40e0d0;--shape-b-end:rgba(0,128,128,0);--shape-c-start:rgba(224,255,255,0);--shape-c-middle:rgba(32,178,170,0);--shape-c-end:#006064;--shape-d-start:rgba(224,255,255,0);--shape-d-middle:rgba(0,128,128,0);--shape-d-end:#00838f}.orb-palette-emerald{--main-bg-start:#2ecc71;--main-bg-end:#27ae60;--shadow-color-1:rgba(0,128,64,0);--shadow-color-2:rgba(46,204,113,.5);--shadow-color-3:hsla(0,0%,100%,.8);--shadow-color-4:#58d68d;--shape-a-start:#66ffb2;--shape-a-end:rgba(39,174,96,0);--shape-b-start:#9fc;--shape-b-middle:#2ecc71;--shape-b-end:rgba(0,128,64,0);--shape-c-start:rgba(230,255,240,0);--shape-c-middle:rgba(102,255,178,.3);--shape-c-end:#2ecc71;--shape-d-start:rgba(240,255,250,0);--shape-d-middle:rgba(88,214,141,.4);--shape-d-end:#1e8449}.orb-palette-goldenGlow{--main-bg-start:#fc0;--main-bg-end:orange;--shadow-color-1:rgba(255,215,0,0);--shadow-color-2:rgba(255,215,0,.5);--shadow-color-3:hsla(0,0%,100%,.8);--shadow-color-4:#ff8c00;--shape-a-start:#ffe964;--shape-a-end:rgba(255,215,0,0);--shape-b-start:#ffd250;--shape-b-middle:#ffb432;--shape-b-end:rgba(255,140,0,0);--shape-c-start:hsla(0,0%,100%,0);--shape-c-middle:rgba(255,245,100,.5);--shape-c-end:gold;--shape-d-start:hsla(0,0%,100%,0);--shape-d-middle:rgba(255,215,0,.5);--shape-d-end:#ffb800}.orb-palette-volcanic{--main-bg-start:#320a00;--main-bg-end:#961400;--shadow-color-1:rgba(255,69,0,0);--shadow-color-2:rgba(255,69,0,.4);--shadow-color-3:rgba(255,140,0,.7);--shadow-color-4:red;--shape-a-start:#ff5722;--shape-a-end:rgba(255,69,0,0);--shape-b-start:tomato;--shape-b-middle:#ff4500;--shape-b-end:rgba(200,0,0,0);--shape-c-start:rgba(255,87,34,.5);--shape-c-middle:rgba(255,140,0,.7);--shape-c-end:#ff4500;--shape-d-start:rgba(50,10,0,.5);--shape-d-middle:rgba(200,30,10,.7);--shape-d-end:rgba(255,69,0,.8)}.blob-a.orb-palette-cosmicNebula .blob-gradient{fill:url(#gradient-cosmic-a)}.blob-b.orb-palette-cosmicNebula .blob-gradient{fill:url(#gradient-cosmic-b)}.blob-a.orb-palette-caribean .blob-gradient{fill:url(#gradient-caribean-a)}.blob-b.orb-palette-caribean .blob-gradient{fill:url(#gradient-caribean-b)}";
styleInject(css_248z);

const SvgElementsCSP = ({ paletteClass }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: `blob-a ${paletteClass}` },
            React.createElement("path", { className: "blob-gradient", d: "M23.3,-31.9C28.4,-28.4,29.5,-19.2,31.1,-10.9C32.6,-2.6,34.7,4.7,33.5,11.7C32.3,18.6,27.8,25.3,21.6,28.8C15.5,32.3,7.8,32.6,-0.6,33.5C-9,34.4,-18.1,35.8,-24.8,32.5C-31.5,29.2,-35.9,21.2,-36.5,13.3C-37.2,5.4,-34.1,-2.4,-31.6,-10.4C-29.1,-18.3,-27.2,-26.6,-22.1,-30.1C-16.9,-33.6,-8.4,-32.3,0.3,-32.8C9.1,-33.3,18.2,-35.4,23.3,-31.9Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" })),
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: `blob-b ${paletteClass}` },
            React.createElement("path", { className: "blob-gradient", d: "M19.2,-27.1C25.6,-29.4,32.3,-26,33.8,-20.5C35.3,-15,31.7,-7.5,27.8,-2.2C23.9,3,19.8,6,16.8,8.9C13.8,11.8,11.9,14.6,9.3,18.8C6.7,23,3.3,28.6,-0.7,29.8C-4.7,31,-9.4,27.8,-16.7,26.2C-23.9,24.7,-33.6,24.8,-39.3,20.7C-45.1,16.7,-47,8.3,-45.4,0.9C-43.8,-6.5,-38.8,-13,-32.6,-16.3C-26.4,-19.6,-18.9,-19.7,-13.3,-17.9C-7.6,-16,-3.8,-12.2,1.3,-14.4C6.3,-16.6,12.7,-24.8,19.2,-27.1Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" })),
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-shine" },
            React.createElement("path", { fill: "white", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" })),
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "blob-shine shine-b" },
            React.createElement("path", { fill: "white", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" }))));
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

const defaultSize = 1;
const defaultAnimationSpeedBase = 1;
const defaultAnimationSpeedHue = 1;
const defaultHueRotation = 120;
const defaultMainOrbHueAnimation = false;
const defaultBlobAOpacity = 0.3;
const defaultBlobBOpacity = 0.8;
const defaultNoShadowValue = false;

// Maps numeric values to predefined CSS classes
const getSizeClass = (size) => {
    if (size <= 0.5)
        return "orb-size-xs";
    if (size <= 0.75)
        return "orb-size-sm";
    if (size <= 1.25)
        return "orb-size-md";
    if (size <= 1.75)
        return "orb-size-lg";
    if (size <= 2.5)
        return "orb-size-xl";
    return "orb-size-xxl";
};
const getSpeedClass = (speed) => {
    if (speed <= 0.5)
        return "orb-speed-slow";
    if (speed <= 0.9)
        return "orb-speed-medium";
    if (speed <= 1.5)
        return "orb-speed-fast";
    return "orb-speed-very-fast";
};
const getHueRotationClass = (rotation) => {
    if (rotation <= 60)
        return "orb-hue-small";
    if (rotation <= 180)
        return "orb-hue-medium";
    if (rotation <= 270)
        return "orb-hue-large";
    return "orb-hue-full";
};
const getOpacityClass = (opacity, prefix) => {
    if (opacity <= 0.2)
        return `${prefix}-opacity-10`;
    if (opacity <= 0.4)
        return `${prefix}-opacity-30`;
    if (opacity <= 0.6)
        return `${prefix}-opacity-50`;
    if (opacity <= 0.8)
        return `${prefix}-opacity-70`;
    return `${prefix}-opacity-90`;
};
// Get palette class based on the closest match to predefined palettes
const getPaletteClass = (palette) => {
    // Compare the given palette with predefined palettes to find the closest match
    const palettes = Object.entries(colorPalettes);
    for (const [name, presetPalette] of palettes) {
        if (palette.mainBgStart === presetPalette.mainBgStart &&
            palette.mainBgEnd === presetPalette.mainBgEnd) {
            return `orb-palette-${name}`;
        }
    }
    // Default to cosmic if no match is found
    return "orb-palette-cosmicNebula";
};
const Orb = ({ palette = colorPalettes.cosmicNebula, size = defaultSize, animationSpeedBase = defaultAnimationSpeedBase, animationSpeedHue = defaultAnimationSpeedHue, hueRotation = defaultHueRotation, mainOrbHueAnimation = defaultMainOrbHueAnimation, blobAOpacity = defaultBlobAOpacity, blobBOpacity = defaultBlobBOpacity, noShadow = defaultNoShadowValue, }) => {
    // Map props to predefined CSS classes
    const sizeClass = getSizeClass(size);
    const speedBaseClass = getSpeedClass(animationSpeedBase);
    const speedHueClass = getSpeedClass(animationSpeedHue);
    const hueRotationClass = getHueRotationClass(hueRotation);
    const blobAOpacityClass = getOpacityClass(blobAOpacity, "blob-a");
    const blobBOpacityClass = getOpacityClass(blobBOpacity, "blob-b");
    const paletteClass = getPaletteClass(palette);
    const hueAnimationClass = mainOrbHueAnimation ? "orb-main-hue-animated" : "";
    const shadowClass = noShadow ? "orb-no-shadow" : "";
    // Combine all classes
    const rootClasses = [
        "orb-root",
        sizeClass,
        speedBaseClass,
        speedHueClass,
        hueRotationClass,
        blobAOpacityClass,
        blobBOpacityClass,
        paletteClass,
        hueAnimationClass,
        shadowClass
    ].filter(Boolean).join(" ");
    return (React.createElement("div", { className: rootClasses },
        React.createElement("div", { className: "orb-main" },
            React.createElement("div", { className: "glass loc-glass" }),
            React.createElement("div", { className: "shape-a loc-a" }),
            React.createElement("div", { className: "shape-b loc-b" }),
            React.createElement("div", { className: "shape-c loc-c" }),
            React.createElement("div", { className: "shape-d loc-d" }),
            React.createElement(SvgElementsCSP, { paletteClass: paletteClass }))));
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
