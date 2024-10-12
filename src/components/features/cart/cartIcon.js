/** @jsx jsx */
import { jsx, Box, Image } from "theme-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../../redux/cart/cartSlice";
import cart from "assets/images/icons/darkCart.svg";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.data);

  return (
    <Box sx={styles.cart} onClick={() => dispatch(openCart())}>
      <Image sx={styles.cart.cartIcon} src={cart} />
      <Box sx={styles.cart.notificationsCount}>{cartProducts.length}</Box>
    </Box>
  );
};

export default CartIcon;

const styles = {
  cart: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    zIndex: "100",
    cursor: "pointer",
    cartIcon: {
      height: "20px",
      width: "20px",
    },
    notificationsCount: {
      position: "absolute",
      textAlign: "center",
      fontSize: "xx-small",
      fontWeight: "600",
      color: "white",
      top: "0.1rem",
      left: "1rem",
      backgroundColor: "accent",
      width: "15px",
      height: "15px",
      borderRadius: "50%",
    },
  },
};
