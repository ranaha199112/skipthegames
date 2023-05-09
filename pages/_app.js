import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Log in to your Skipthegames.com account</title>
        <meta
          name="description"
          content="Skip the games. Get satisfaction. Meet top-rated escorts and clients."
        />
        <meta name="keywords" content="adult dating, escorts, review board" />
      </Head>

      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
