// will be adding more animations

console.log("%c checking..", "color: yellow");

const TRACE = () => {
    console.trace("just checking");
};

anime({
    targets: "div.box.small",
    keyframes: [
        { translateX: 200, scale: 0.5 },
        { translateY: 25, scale: 1 },
        { translateX: 100, scale: 1.5 },
        { translateY: 25, scale: 2 },
    ],
    rotate: {
        value: 360,
        duration: 1000,
        easing: "easeInOutSine",
    },
    borderRadius: ["0%", "50%"],
    easing: "easeInOutQuad",
    direction: "alternate",
    endDelay: 500,
    duration: 2000,
    loop: true,
});

anime({
    targets: "div.small2",
    translateY: [100, 500],
    translateX: [200],
    rotate: {
        value: "*=5.4",
        duration: 500,
        easing: "easeInOutSine",
    },
    borderRadius: ["0%", "50%"],
    direction: "alternate",
    endDelay: 500,
    easing: "easeInOutQuad",
    duration: 2000,
    loop: true,
});

TRACE();

anime({
    targets: ".button",
    translateX: {
        value: "500",
    },
    rotate: {
        value: "1turn",
        duration: 2000,
        easing: "easeInOutSine",
    },
    direction: "alternate",
    easing: "easeInOutQuad",
    duration: 2000,
    endDelay: 1000,
    loop: true,
});

anime({
    targets: ".intro",
    translateX: {
        value: "500",
    },
    direction: "alternate",
    easing: "easeInOutQuad",
    duration: 2000,
    endDelay: 1000,
    loop: true,
});