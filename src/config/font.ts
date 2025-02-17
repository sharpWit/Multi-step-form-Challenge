import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      style: "regular",
      weight: "400",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      style: "medium",
      weight: "400",
    },
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      style: "bold",
      weight: "500",
    },
  ],
});
