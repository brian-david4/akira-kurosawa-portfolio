export const menuBtn = {
  initial: {
    y: "120%",
  },
  enter: {
    y: "0%",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-120%",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const navLink = {
  initial: {
    y: "100%",
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 1.5 },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 1.5 },
  },
};
