/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Subscribe from "sections/subscribe";
import Footer from "./footer";
import Cart from "./features/cart";
import Header from "./header/header";
export default function Layout({ children, spaceLeft, homeToggle, noLogo }) {
  return (
    <React.Fragment>
      <main>
        {/* <Header /> */}
        <Cart />
        {children}
      </main>
    </React.Fragment>
  );
}
