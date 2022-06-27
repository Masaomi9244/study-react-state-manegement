import type { AppProps } from "next/app";
import { Header } from "src/components/header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
