/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Subscribe from "sections/subscribe";
import Footer from "./footer";
import Logo from "./logo";
import MobileDrawer from "./header/mobile-drawer";
import Cart from "./features/cart";
export default function Layout({ children, spaceLeft, homeToggle, noLogo }) {
  return (
    <React.Fragment>
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {/* <Cart /> */}

        <Logo home={homeToggle} noLogo={noLogo} />
        {/* <Header spaceLeft={spaceLeft} */}
        <MobileDrawer homeToggle={homeToggle} />
        {children}
      </main>
    </React.Fragment>
  );
}
