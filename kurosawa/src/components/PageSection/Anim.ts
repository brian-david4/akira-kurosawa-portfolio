export const sectionOne = {
  initial: {
    y: "150px",
    opacity: 0,
  },
  enter: {
    y: "0px",
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.65, 0, 0.35, 1],
      staggerChildren: 0.2,
    },
  },
};
