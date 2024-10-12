/** @jsx jsx */
import { jsx, Box, Text, Button, Heading, Container } from "theme-ui";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import CartProduct from "components/features/cart/product";
import CheckoutSummary from "components/features/cart/checkoutSummary";
import { Link } from "components/link";
import Header from "components/header/header";
import marble from "assets/images/marble.png";

const Cart = () => {
  let products = useSelector((state) => state.cart.data);

  // total price
  const total =
    products.length > 0 &&
    products
      .reduce((a, p) => {
        return a + p.price * p.qty;
      }, 0)
      .toFixed(2);
  // total items
  const totalItems = products.length;

  return (
    <Box as="section" variant={"section.shop"} sx={styles.section}>
      <Container sx={styles.container}>
        <Header darkBackground />
        <Box sx={styles.cartPage}>
          <Heading as="h1" sx={styles.cartPage.title}>
            Shopping Bag
          </Heading>
          <Box sx={styles.cartPage.inner}>
            <Box sx={styles.cartPage.products}>
              {products.length === 0 ? (
                <>
                  <Heading as="h3" sx={styles.emptyCart}>
                    Your cart is empty ...
                  </Heading>
                  <Link sx={styles.inCart} path="/shop">
                    Back To Shop
                  </Link>
                </>
              ) : (
                <AnimatePresence>
                  {products.map((product) => (
                    <CartProduct key={product._id} product={product} />
                  ))}
                </AnimatePresence>
              )}
            </Box>
            {products.length > 0 && (
              <CheckoutSummary total={total} totalItems={totalItems}>
                <Link path="/shipping">
                  <Button variant="darkGlass" sx={styles.cartPage.checkoutBtn}>
                    PROCEED TO CHECKOUT
                  </Button>
                </Link>
              </CheckoutSummary>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cart;

const styles = {
  section: {
    position: "absolute",
    width: "100vw",
    // height: "100vh",
    backgroundImage: `url(${marble})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat-y",
  },
  cartPage: {
    marginTop: "3rem",
    marginBottom: "15rem",
    title: {
      paddingBottom: "3rem",
      color: "dark",
      textAlign: "center",
    },
    inner: {
      display: "flex",
      flexDirection: ["column", "column", "row"],
      alignItems: ["center", "center", "flex-start"],
      justifyContent: ["space-between"],
    },
    products: {
      width: "100%",
    },

    img: {
      width: "100px",
      height: "100px",
    },
    inCart: {
      padding: "2rem",
    },
    checkoutBtn: {
      textAlign: "center",
      width: "100%",
      height: "100%",
      borderRadius: "0px ",
      borderTop: "none",

      mt: "20px",
      fontSize: 2,
      boxShadow: "none",
      // color: "dark",
    },
  },
};
