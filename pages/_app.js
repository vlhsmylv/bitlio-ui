import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { AuthContextProvider } from "../context/AuthContext.context";
import 'react-toastify/dist/ReactToastify.css';
// import Disabled from "../components/information/Disabled.information";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/brand/icon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
      </Head>

      <AuthContextProvider>
        <Component {...pageProps} />
        <ToastContainer limit={1} />
      </AuthContextProvider>
    </>
  );
};

export default MyApp;
