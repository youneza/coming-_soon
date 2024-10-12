/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Badge } from "theme-ui";
import React from "react";
import { motion } from "framer-motion";
import { removeFromCart } from "redux/cart/cartSlice";
import ProductQty from "./productQty";
import RemoveProduct from "./removeProduct";
import { Link } from "components/link";

const CartProduct = ({ product, cartPopup }) => {
  return (
    <motion.Box
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge
        // sx={cartPopup ? styles.cartPopupProduct : styles.cartProduct}
        sx={styles.cartProduct}
        variant={cartPopup ? "glass" : "glass"}
        // className={cartPopup ? "cart-popup-product" : ""}
      >
        <Box sx={styles.cartProduct.leftSide}>
          <Link path={`/shop/product/${product._id}`}>
            <Image
              sx={styles.cartProduct.productImg}
              // src={
              //   product.imageUrl
              //     ? `http://localhost:5000${product.imageUrl}`
              //     : `/img/${product.name.replace(/\s/g, "")}.webp`
              // }
              src={product.src}
              alt={product.name}
            />
          </Link>
          <Box sx={styles.cartProduct.leftSide.description}>
            <Link path={`/shop/product/${product._id}`}>
              <Text as="p" sx={styles.cartProduct.leftSide.description.name}>
                {product.name}
              </Text>
            </Link>
            <Text
              as="p"
              sx={styles.cartProduct.leftSide.description.smallerText}
            >
              {product.description} product description...
            </Text>
            <Text
              as="p"
              sx={styles.cartProduct.leftSide.description.smallerText}
            >
              Cap size : L
            </Text>
            <Text as="p" sx={styles.cartProduct.leftSide.description.price}>
              ${product.price} usd
            </Text>
          </Box>
        </Box>
        <Box sx={styles.cartProduct.rightSide}>
          <RemoveProduct _id={product._id} removeFromCart={removeFromCart} />
          <ProductQty
            id={product._id}
            qty={product.qty}
            countInStock={product.countInStock}
          />
        </Box>
      </Badge>
    </motion.Box>
  );
};

export default CartProduct;

const styles = {
  cartProduct: {
    width: "90%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 8px 32px 0 rgb(31 38 135 / 17%)",
    backdropFilter: "blur(2px) saturate(100%)",
    borderRadius: "0",
    border: " 1px solid black",

    mx: "auto",
    mb: ["20px", "25px"],
    fontSize: "16px",
    color: "dark",
    p: "10px",
    productImg: {
      height: "100px",
      width: "50px !important ",

      objectFit: "contain",
    },

    leftSide: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      description: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "70px",
        ml: "10px",
        name: {
          fontWeight: "bold",
          fontSize: ["14px", "15px", "18px"],
        },
        price: {
          fontWeight: "lighter",
          fontSize: ["14px", "15px", "18px"],
        },
        smallerText: {
          fontWeight: "lighter",
          fontSize: ["12px", "13px", "14px"],
        },
      },
    },

    rightSide: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "60px",
    },
    count: {
      padding: "0.1rem 1rem",
      border: "1px solid black",
      width: "8rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "1",

      button: {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        fontSize: "1",
        marginTop: "0.5rem",
        " &:last-child": {
          fontSize: "medium",
          padding: "0",
          margin: "0",
        },
      },
    },
  },
};
