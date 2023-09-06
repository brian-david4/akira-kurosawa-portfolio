export const navWrapper = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {duration: 0.4, ease: [0.12, 0, 0.39, 0]}
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.4, ease: [0.12, 0, 0.39, 0]}
    }
}

export const navbarScale = {
    initial: {
        scaleX: 0
    },
    enter: {
        scaleX: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        scaleX: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const linkFade = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.6}
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.2, ease: [0.76, 0, 0.24, 1]}
    }
}