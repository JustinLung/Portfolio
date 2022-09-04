import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: mode("#121212", "#ffffff"),
      },
    }),
    colors: {
      white: "#ffffff",
      black: "#121212",
      grey: "#040b10",
      primary: "#bb86fc",
      secondary: "#cf6679",
      secondaryDark: "#b5475b",
    },
  },
});
