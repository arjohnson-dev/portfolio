import { createTheme } from "@mantine/core";

export const colors = [
  "#ffffff", // white
  "#f1ebe1", // antique parchment
  "#d8d1c4", // limestone veil
  "#b7b09e", // driftwood taupe
  "#b2ac9c", // shale ridge
  "#afae99", // weathered linen
  "#acaf95", // olive sprig
  "#7f836e", // mossed slate
  "#525746", // castle stone
  "#232524", // charcoal
];

export const theme = createTheme({
  colors: {
    colors,
  },
  primaryColor: "colors",
});
