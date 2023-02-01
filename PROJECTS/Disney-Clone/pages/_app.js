import "../styles/globals.css";
import { GlobalProvider } from "../context/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
