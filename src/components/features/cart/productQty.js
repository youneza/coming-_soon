/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Button, Text } from "theme-ui";
import { useDispatch } from "react-redux";
import { decrement, increment } from "redux/cart/cartSlice";

const ProductQty = ({ id, qty, countInStock }) => {
  const dispatch = useDispatch();

  // incremet product qty but not more than count in stock
  const incrementQty = () => {
    if (qty === countInStock) return;
    dispatch(increment(id));
  };

  return (
    <Box sx={styles.productQty}>
      <Button
        variant="white"
        sx={styles.productQty.plus}
        onClick={incrementQty}
      >
        +
      </Button>
      <Text as="p">{qty}</Text>
      <Button
        variant="white"
        sx={styles.productQty.minus}
        disabled={qty === 1}
        onClick={() => dispatch(decrement(id))}
      >
        -
      </Button>
    </Box>
  );
};

export default ProductQty;

const styles = {
  // productQty: {
  //   padding: "0.3rem 1rem",
  //   border: "1px solid $black",
  //   width: "9rem",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",

  //   button: {
  //     border: "none",
  //     outline: "none",
  //     backgroundColor: "transparent",
  //     cursor: "pointer",
  //     marginTop: "0.5rem",

  //     "&:last-child": {
  //       fontSize: "3",
  //       padding: "0",
  //       margin: "0",
  //     },
  //   },
  // },
  productQty: {
    padding: "0",
    border: "1px solid black",
    // borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    mr: 2,
    p: {
      width: "15px",
      display: "grid",
      placeItems: "center",
      opacity: "1",
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "transparent",
      color: "dark",
      fontSize: "15px",
      py: 0,
      width: "15px",
    },

    plus: {
      borderRight: "1px solid black",
      borderRadius: 0,
      // mr: "5px",
    },
    minus: {
      borderLeft: "1px solid black",
      borderRadius: 0,
      // ml: "5px",
    },
    "button: disabled": {
      opacity: "0.5",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
};
