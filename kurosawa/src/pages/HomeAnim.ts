export const decadeImageFade = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {duration: 0.3, ease: [0.11, 0, 0.5, 0]}
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.5, ease: [0.11, 0, 0.5, 0]}
    }
}