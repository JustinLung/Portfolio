import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../styles/style";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Transition>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
