export const fadeIn = (duration, delay) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: [1, 0],
    },
  };
};

export const slideIn = (direction, duration, delay) => {
  return {
    hidden: {
      y: direction === "up" ? "100px" : direction === "down" ? -100 : 100,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 100,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transitition: {
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      y: direction === "up" ? "100px" : direction === "down" ? -100 : -100,
      x: direction === "left" ? 0 : direction === "right" ? -100 : -100,
      opacity: 0,
    },
  };
};

export const swipeIn = (duration, delay) => {
  return {
    hidden: {
      x: "100%",
      width: "100%",
    },
    show: {
      x: "0%",
      width: "0%",
      transitition: {
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      x: ["100%", "100%"],
      width: ["0%", "100%"],
    },
  };
};
