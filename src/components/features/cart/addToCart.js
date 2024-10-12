/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Text, Span } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import { openCart, addToCart } from "../../../redux/cart/cartSlice";
import { Link } from "components/link";
import cart from "assets/images/icons/cart.svg";
import darkCart from "assets/images/icons/darkCart.svg";

const AddToCart = ({ product, dark, ...rest }) => {
  const dispatch = useDispatch();
  const isProductInCart = useSelector((state) =>
    state.cart.data.find((item) => item._id === product._id)
  );

  return (
    <>
      {!isProductInCart ? (
        <Button
          variant="primary"
          sx={styles.addToCart}
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(openCart());
          }}
          {...rest}
        >
          {dark ? (
            <Image src={darkCart} alt="cart icon" />
          ) : (
            <Image src={cart} alt="cart icon" />
          )}
        </Button>
      ) : (
        <Box sx={styles.productInCart} {...rest}>
          <Link sx={styles.buyButton} path="/cart">
            Go To Cart
          </Link>
        </Box>
      )}
    </>
  );
};

export default AddToCart;

const styles = {
  addToCart: {
    px: "10px",
    py: "10px",
    boxShadow: "0 4px 7px 0 rgb(31 38 135 / 28%)",
    fontSize: ["12px", "14px", "18px"],
    minHeight: "fit-content",
    img: {
      height: "20px",
    },
    buyButton: {
      fontWeight: "bold",
    },
  },
};
