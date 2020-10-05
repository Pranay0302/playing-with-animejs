console.log("checking..")


anime({
    targets: 'div.box.small',
    translateX: [
        { value: 500, duration: 2000 }
    ],
    rotate: {
        value: 360,
        duration: 1000,
        easing: 'easeInOutSine'
    },

    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    endDelay: 500,
    loop: true
})