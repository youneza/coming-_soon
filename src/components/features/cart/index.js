/** @jsx jsx */
import { jsx, Box, Heading, Badge, Image } from "theme-ui";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./footer";
import { openCart } from "../../../redux/cart/cartSlice";
import CartProduct from "./product";
import useOutsideClickRef from "@rooks/use-outside-click-ref";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import marble from "assets/images/marble.jpg";

const Cart = () => {
  const dispatch = useDispatch();
  const { isCartOpen, data: products } = useSelector((state) => state.cart);

  // total price
  const total =
    products.length > 0 &&
    products
      .reduce((a, p) => {
        return a + p.price * p.qty;
      }, 0)
      .toFixed(2);

  const handleOutsideClick = (e) => {
    if (e.target.className === "cart-remove-product") return;
    if (isCartOpen) {
      dispatch(openCart());
    }
  };
  const [ref] = useOutsideClickRef(handleOutsideClick);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.Box
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            sx={styles.overlay}
          />
          <motion.Box
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 1000 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            sx={styles.cart}
          >
            <Box sx={styles.cart.cartHeader}>
              <Box sx={styles.cart.cartHeader.head}>
                <Heading as="h1">Shopping Bag</Heading>
                <Box sx={styles.cart.cartHeader.total}>
                  <span>Subtotal</span>{" "}
                  <span>
                    ${""}
                    {total ? total : "00.00"}
                  </span>
                </Box>
              </Box>
              <IoMdClose
                size="25px"
                alt="close cart"
                color="#00000"
                sx={styles.cart.cartHeader.closeCart}
                onClick={() => {
                  dispatch(openCart());
                }}
              />
            </Box>
            <Box sx={styles.cart.cartMain}>
              {products.length === 0 && (
                <Heading as="h3" sx={styles.cart.emptyCart}>
                  Your cart is empty ...
                </Heading>
              )}
              <AnimatePresence sx={styles.productWrapper}>
                <Box sx={styles.productWrapper}>
                  {products.map((product) => (
                    <CartProduct
                      key={product._id}
                      product={product}
                      cartPopup
                      sx={styles.product}
                    />
                  ))}
                </Box>
              </AnimatePresence>
            </Box>{" "}
            <Footer total={total} openCart={openCart} />
          </motion.Box>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;

const styles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  productWrapper: {
    maxHeight: "150px",
  },

  cartRemoveProduct: {
    fontSize: "$small",
    fontWeight: "lighter",
    cursor: "pointer",
    position: "relative",
    "&:after": {
      content: "''",
      backgroundColor: "grey",
      width: "100%",
      height: "1px",
      position: "absolute",
      bottom: "-4px",
      left: "-0px",
      // @include transition;
    },
    "&:hover:after": {
      width: "0%",
    },
  },
  cart: {
    position: "fixed",
    top: "0",
    right: "0",
    maxWidth: "35rem",
    width: "100%",
    height: "100vh",
    color: "dark",
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(10px) saturate(100%)",
    // borderRadius: "  15px 0 0 15px ",
    backgroundImage: `url(${marble})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    // border: " 1px solid rgb(168, 171, 177)",
    zIndex: "40",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    emptyCart: {
      p: "1.5rem",
    },

    cartHeader: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      // color: "accent",
      justifyContent: "flex-end",
      padding: "1.5rem",
      // borderBottom: "2px   solid rgba(168, 171, 177, 0.5) ",

      head: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "16%",

        h1: {
          color: "dark",
          fontSize: "1.6rem",
        },
      },
      closeCart: {
        alignSelf: "center",
        cursor: "pointer",
        // @include transition;
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
    },
    cartMain: {
      marginTop: "1rem",
      paddingRight: "1rem",
      overflow: "auto",
      height: "75vh",
      width: "100%",
      overflowX: "hidden",
    },
  },
  cartFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    borderTop: "2px $lightgrey solid",
    textAlign: "center",
    "& a:last-child ": {
      color: "grey",
      marginTop: "1.5rem",
      marginLeft: "0.5rem",
      fontWeight: "bold",
    },
    checkout: {
      backgroundColor: "accent",
      width: "70%",
    },
  },

  "@media screen and (max-width: 450px)": {
    cart: {
      width: "100%",
    },
  },
};
