import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: () => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: mode("#121212", "#ffffff"),
      },
    }),
    config: {
      initialColorMode: "dark",
      useSystemColorMode: true,
    },
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
