import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "twin.macro";
import tw from "twin.macro";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const ContDiv = tw.div`mx-auto md:w-[80%] sm:w-[95%] font-Rmono`;

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ContDiv>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ContDiv>
    </QueryClientProvider>
  );
}

export default MyApp;
