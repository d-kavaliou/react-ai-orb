import React from 'react';

// src/components/SvgElements/SvgElements.tsx
const SvgElementsCSP = ({ paletteClass }) => (React.createElement(React.Fragment, null,
    React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: `wpuc-blob-a ${paletteClass}` },
        React.createElement("path", { className: "wpuc-blob-gradient", d: "M23.3,-31.9C28.4,-28.4,29.5,-19.2,31.1,-10.9C32.6,-2.6,34.7,4.7,33.5,11.7C32.3,18.6,27.8,25.3,21.6,28.8C15.5,32.3,7.8,32.6,-0.6,33.5C-9,34.4,-18.1,35.8,-24.8,32.5C-31.5,29.2,-35.9,21.2,-36.5,13.3C-37.2,5.4,-34.1,-2.4,-31.6,-10.4C-29.1,-18.3,-27.2,-26.6,-22.1,-30.1C-16.9,-33.6,-8.4,-32.3,0.3,-32.8C9.1,-33.3,18.2,-35.4,23.3,-31.9Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" })),
    React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: `wpuc-blob-b ${paletteClass}` },
        React.createElement("path", { className: "wpuc-blob-gradient", d: "M19.2,-27.1C25.6,-29.4,32.3,-26,33.8,-20.5C35.3,-15,31.7,-7.5,27.8,-2.2C23.9,3,19.8,6,16.8,8.9C13.8,11.8,11.9,14.6,9.3,18.8C6.7,23,3.3,28.6,-0.7,29.8C-4.7,31,-9.4,27.8,-16.7,26.2C-23.9,24.7,-33.6,24.8,-39.3,20.7C-45.1,16.7,-47,8.3,-45.4,0.9C-43.8,-6.5,-38.8,-13,-32.6,-16.3C-26.4,-19.6,-18.9,-19.7,-13.3,-17.9C-7.6,-16,-3.8,-12.2,1.3,-14.4C6.3,-16.6,12.7,-24.8,19.2,-27.1Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" })),
    React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "wpuc-blob-shine" },
        React.createElement("path", { className: "wpuc-blob-gradient", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" })),
    React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "wpuc-blob-shine wpuc-shine-b" },
        React.createElement("path", { className: "wpuc-blob-gradient", d: "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z", width: "100%", height: "100%", transform: "translate(50 50)", strokeWidth: "0" }))));

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

// src/components/Orb.jsx
// Maps numeric values to predefined CSS classes
const getSizeClass = (size) => {
    if (size <= 0.5)
        return "wpuc-orb-size-xs";
    if (size <= 0.75)
        return "wpuc-orb-size-sm";
    if (size <= 1.25)
        return "wpuc-orb-size-md";
    if (size <= 1.75)
        return "wpuc-orb-size-lg";
    if (size <= 2.5)
        return "wpuc-orb-size-xl";
    return "wpuc-orb-size-xxl";
};
const getSpeedClass = (speed) => {
    if (speed <= 0.5)
        return "wpuc-orb-speed-slow";
    if (speed <= 0.9)
        return "wpuc-orb-speed-medium";
    if (speed <= 1.5)
        return "wpuc-orb-speed-fast";
    return "wpuc-orb-speed-very-fast";
};
const getHueRotationClass = (rotation) => {
    if (rotation <= 60)
        return "wpuc-orb-hue-small";
    if (rotation <= 180)
        return "wpuc-orb-hue-medium";
    if (rotation <= 270)
        return "wpuc-orb-hue-large";
    return "wpuc-orb-hue-full";
};
const getOpacityClass = (opacity, prefix) => {
    // prefix should be "wpuc-blob-a" or "wpuc-blob-b"
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
const getPaletteClass = (palette) => {
    for (const [name, preset] of Object.entries(colorPalettes)) {
        if (palette.mainBgStart === preset.mainBgStart &&
            palette.mainBgEnd === preset.mainBgEnd) {
            // convert camelCase name → kebab-case
            const kebab = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            return `wpuc-orb-palette-${kebab}`;
        }
    }
    return "wpuc-orb-palette-cosmic-nebula";
};
const Orb = ({ palette = colorPalettes.cosmicNebula, size = defaultSize, animationSpeedBase = defaultAnimationSpeedBase, animationSpeedHue = defaultAnimationSpeedHue, hueRotation = defaultHueRotation, mainOrbHueAnimation = defaultMainOrbHueAnimation, blobAOpacity = defaultBlobAOpacity, blobBOpacity = defaultBlobBOpacity, noShadow = defaultNoShadowValue, }) => {
    const sizeClass = getSizeClass(size);
    const speedBase = getSpeedClass(animationSpeedBase);
    const speedHue = getSpeedClass(animationSpeedHue);
    const hueRotClass = getHueRotationClass(hueRotation);
    const blobAClass = getOpacityClass(blobAOpacity, "wpuc-blob-a");
    const blobBClass = getOpacityClass(blobBOpacity, "wpuc-blob-b");
    const paletteClass = getPaletteClass(palette);
    const hueAnimClass = mainOrbHueAnimation ? "wpuc-orb-main-hue-animated" : "";
    const shadowClass = noShadow ? "wpuc-orb-no-shadow" : "";
    const rootClasses = [
        "wpuc-orb-root",
        sizeClass,
        speedBase,
        speedHue,
        hueRotClass,
        blobAClass,
        blobBClass,
        paletteClass,
        hueAnimClass,
        shadowClass
    ]
        .filter(Boolean)
        .join(" ");
    return (React.createElement("div", { className: rootClasses },
        React.createElement("div", { className: "wpuc-orb-main" },
            React.createElement("div", { className: "wpuc-glass wpuc-loc-glass" }),
            React.createElement("div", { className: "wpuc-shape-a wpuc-loc-a" }),
            React.createElement("div", { className: "wpuc-shape-b wpuc-loc-b" }),
            React.createElement("div", { className: "wpuc-shape-c wpuc-loc-c" }),
            React.createElement("div", { className: "wpuc-shape-d wpuc-loc-d" }),
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
