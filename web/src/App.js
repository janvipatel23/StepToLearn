import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./data/Context";
import Routes from "./Routes";
import theme from "./utils/theme";
import SplashScreen from "./pages/SplashScreen";
import { ReactSession } from "react-client-session";
const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3500);
  }, []);

  if (showSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
      <ToastContainer />
    </ContextProvider>
  );
};

export default App;
