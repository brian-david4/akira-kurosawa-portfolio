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
  exit: {
    y: "-110%",
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
  },
};
