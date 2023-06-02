import "@/styles/globals.css";
import { CoffeeBarProvider } from "@/context/CoffeeBarProvider";

export default function App({ Component, pageProps }) {
  return (
    <CoffeeBarProvider>
      <Component {...pageProps} />
    </CoffeeBarProvider>
  );
}
