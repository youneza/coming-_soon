import React, { Fragment } from "react";
import { Box, Image } from "theme-ui";
import RcDrawer from "rc-drawer";
import cart from "assets/images/icons/cartMenu.svg";
import wishlist from "assets/images/icons/heart.svg";
import { Link } from "components/link";

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ""}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        {...props}
      >
        {closeButton && (
          <Box as="div" sx={styles.close}>
            <Box>
              <Link path="/cart">
                <Image src={cart} sx={styles.close.img} />
              </Link>
              <Link path="/wishlist">
                <Image src={wishlist} sx={styles.close.img} />
              </Link>
            </Box>
            <Box onClick={toggleHandler}>{closeButton}</Box>
          </Box>
        )}
        <Box sx={drawerStyle}>{children} </Box>
      </RcDrawer>
      <Box
        className="drawer__handler"
        style={{ display: "block" }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </Box>
    </>
  );
}

Drawer.defaultProps = {
  width: "320px",
  placement: "left",
  background: "transparent",
};

const styles = {
  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: "20px",
    width: "100%",
    r: 0,
    p: "15px",
    zIndex: "1",
    cursor: "pointer",

    img: {
      width: "24px",
      height: "24px",
      mr: "15px",
    },
    svg: {
      fill: "#4A271E",
    },
  },
};
