/** @jsx jsx */
import { jsx, Box, Text, Button, Heading, Container } from "theme-ui";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Product from "components/features/wishlist/wishlist";
import { Link } from "components/link";
import Header from "components/header/header";
import marble from "assets/images/marble.png";

const Wishlist = () => {
  let products = useSelector((state) => state.wishlist.data);

  return (
    <Box as="section" variant={"section.wishlist"} sx={styles.section}>
      <Container sx={styles.container}>
        <Header darkBackground />
        <Box sx={styles.wishlistPage}>
          <Heading as="h1" sx={styles.wishlistPage.title}>
            Wishlist
          </Heading>
          <Box sx={styles.wishlistPage.inner}>
            <Box sx={styles.wishlistPage.products}>
              {products.length === 0 ? (
                <>
                  <Heading as="h3" sx={styles.emptyWishlist}>
                    Your Wishlist is empty ...
                  </Heading>
                  <Link sx={styles.backToShop} path="/shop">
                    Back To Shop
                  </Link>
                </>
              ) : (
                <AnimatePresence>
                  {products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
                </AnimatePresence>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Wishlist;

const styles = {
  section: {
    position: "absolute",
    width: "100vw",
    // height: "100vh",
    backgroundImage: `url(${marble})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat-y",
  },
  emptyWishlist: {},
  backToShop: {
    padding: "2rem",
    color: "link",
    mt: "1rem",
  },
  wishlistPage: {
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
  },
};
