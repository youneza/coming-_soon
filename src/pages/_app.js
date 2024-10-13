import { useEffect } from "react";
import Router from "next/router";
// redux
import { Provider } from "react-redux";
import store from "redux/createStore";

import { initGA, logPageView } from "analytics";
import "rc-menu/assets/index.css";
import "rc-drawer/assets/index.css";

import "components/modal/modal.css";
import "typeface-dm-sans";
import "assets/css/react-slick.css";
import Contact from "pages/contact.js";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Contact />
    </>
  );
}
