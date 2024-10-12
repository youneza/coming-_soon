/** @jsx jsx */
import { jsx, Box, Heading, Badge, Input } from "theme-ui";

const CheckoutSummary = ({ children, total, totalItems }) => {
  return (
    <Badge variant="glass" sx={styles.checkoutSummary}>
      <Box sx={styles.checkoutSummary.title}>
        <Heading as="h1">ORDER SUMMARY </Heading>
      </Box>
      <Box sx={styles.checkoutSummary.totalItems}>
        <p sx={styles.checkoutSummary.text}>Total items </p>
        <p sx={styles.checkoutSummary.price}>({totalItems})</p>
      </Box>
      <Box sx={styles.checkoutSummary.shippingCost}>
        <p sx={styles.checkoutSummary.text}>Shipping </p>
        <p sx={styles.checkoutSummary.price}>$00.00</p>
      </Box>

      <Box sx={styles.checkoutSummary.totalPrice}>
        <p sx={styles.checkoutSummary.text}>Total </p>
        <p sx={styles.checkoutSummary.price}>${total}</p>
      </Box>
      <Box sx={styles.checkoutSummary.shippingCost}>
        {/* <p sx={styles.checkoutSummary.text}>PROMO CODE </p> */}
        <Input placeholder="PROMO CODE" sx={styles.checkoutSummary.input} />
      </Box>
      <Box sx={styles.checkoutSummary.checkout}>{children}</Box>
    </Badge>
  );
};

export default CheckoutSummary;

const styles = {
  checkoutSummary: {
    width: ["100%", "100%", "70%", "50%"],
    ml: ["0", "0", "20px", "30px"],
    mt: ["40px", "40px", "0", "0"],
    p: 0,
    px: "0 !important",
    // pb: "5px",
    borderRadius: "0px 0px 0px 0px",
    marginBottom: "30px",
    border: " 1px solid black",
    borderBottom: "none",

    color: "dark",
    backdropFilter: "blur(2px) saturate(100%)",
    title: {
      fontSize: "$medium",
    },

    "& > div": {
      // display: "none",
      maxHeight: "20px",
    },
    p: {
      fontWeight: "400",
    },
    input: {
      backgroundColor: "#4e484833 !important",
      borderColor: "black",
      height: "35px",
      width: "100%",
      mt: "15px",
      borderRadius: "0",

      "&::placeholder": {
        textAlign: "center",
        // color: "black",
      },
    },

    totalPrice: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: "1rem",
      py: "0",
      width: "100%",
      // borderBottom: "solid 1px rgb(0 0 0 / 39%)",
    },
    title: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: "1rem",
      width: "100%",
      // borderBottom: "solid 1px rgb(0 0 0 / 39%)",
    },

    shippingCost: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: "1rem",
      py: "0",
      width: "100%",
      // borderBottom: "solid 1px rgb(0 0 0 / 39%)",
    },
    totalItems: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: "1rem",
      py: "0",
      width: "100%",
      // borderBottom: "solid 1px rgb(0 0 0 / 39%)",
    },
    checkout: {
      width: "100%",
      m: 0,
      p: 0,
      button: {
        mb: "0",
        mx: 0,
      },
    },
  },
};
