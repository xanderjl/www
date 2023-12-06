import { timeline } from "motion";

export const beansAnimation = () => {
  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  timeline(
    [
      [
        "#bean1",
        {
          opacity: [0, 1],
          right: ["8rem", isMobile ? "1rem" : "0rem"],
          transform: ["rotate(-180deg)", "rotate(0deg)"],
        },
      ],
      [
        "#bean2",
        {
          opacity: [0, 1],
          right: ["15rem", isMobile ? "2.5rem" : "3rem"],
          transform: ["rotate(-180deg)", "rotate(0deg)"],
        },
        { at: 0.2 },
      ],
      [
        "#bean3",
        {
          opacity: [0, 1],
          right: ["11rem", isMobile ? "1.5rem" : "1rem"],
          transform: ["rotate(-195deg)", "rotate(-15deg)"],
        },
        { at: 0.1 },
      ],
    ],
    {
      defaultOptions: {
        easing: "ease-out",
      },
      duration: 0.7,
    },
  );
};
