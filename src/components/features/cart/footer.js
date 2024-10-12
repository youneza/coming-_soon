/** @jsx jsx */
import { jsx, Box, Heading, Button } from "theme-ui";
import { Link } from "components/link";
import React from "react";
import { useDispatch } from "react-redux";
import { openCart } from "../../../redux/cart/cartSlice";

const CartFooter = ({ total, openCart }) => {
  const dispatch = useDispatch();
  return (
    <Box sx={styles.cartFooter}>
      {Number(total) === 0 ? (
        <Link
          path="/shop"
          style={{ color: "white" }}
          variant={"button.glass"}
          onClick={() => {
            dispatch(openCart());
          }}
        >
          <Button variant="glass">Back To Shop</Button>
        </Link>
      ) : (
        <>
          <Link
            path="/shipping"
            onClick={() => {
              dispatch(openCart());
            }}
            sx={styles.cartFooter.checkout}
          >
            {/* <Button > */}
            <span>CHECKOUT</span>{" "}
            {/* <span>
                ${""}
                {total ? total : "00.00"}
              </span> */}
            {/* </Button> */}
          </Link>
          <Link
            className="cart-remove-product"
            path="/cart"
            onClick={() => {
              dispatch(openCart());
            }}
          >
            View Shopping Bag
          </Link>
        </>
      )}
    </Box>
  );
};

export default CartFooter;

const styles = {
  cartFooter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: ["2rem 1rem", "2rem 1rem", "3rem"],
    textAlign: "center",
    "& a:last-child ": {
      color: "dark",
      fontWeight: "bold",
    },
    checkout: {
      // width: "70%",
      // mr: "0.5rem",
    },
  },
};
