console.log("checking..")


anime({
    targets: 'div.box.small',
    translateX: [100, 600],
    rotate: {
        value: 360,
        duration: 1000,
        easing: 'easeInOutSine'
    },
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    endDelay: 500,
    duration: 2000,
    loop: true
})

anime({
    targets: 'div.small2',
    translateY: [100, 500],
    rotate: {
        value: '*=5.4',
        duration: 500,
        easing: 'easeInOutSine'
    },
    borderRadius: ['0%', '50%'],
    direction: 'alternate',
    endDelay: 500,
    easing: 'easeInOutQuad',
    duration: 2000,
    loop: true
})

anime({
    targets: '.button',
    translateX: {
        value: '500',
    },
    rotate: {
        value: '2turn',
        duration: 2000,
        easing: 'easeInOutSine'
    },
    direction: 'alternate',
    easing: 'easeInOutQuad',
    duration: 2000,
    endDelay: 1000,
    loop: true
})

anime({
        targets: '.intro',
        translateX: {
            value: '500',
        },
        direction: 'alternate',
        easing: 'easeInOutQuad',
        duration: 2000,
        endDelay: 1000,
        loop: true
    })
    // will be adding more animations