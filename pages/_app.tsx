import type { AppProps } from "next/app";
import "@/assets/css/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
