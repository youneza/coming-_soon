/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Input } from "theme-ui";
import CascadingFlowers from "assets/images/cascadingFlowersHQ-cropped.svg";
import blurryGradient from "assets/images/blurryGradient3.svg";
import { IoIosSearch } from "react-icons/io";
import Product from "components/cards/product-card";
import { FaGripLines } from "react-icons/fa";
import params from "assets/images/icons/params.svg";

import shortText from "assets/images/icons/shortText.svg";
import Header from "components/header/header";
import Skeleton from "react-loading-skeleton";
import marble from "assets/images/marble.jpg";
import shopBackground from "assets/images/shopBackground.png";

import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";

const Shop = ({ query, subCategory }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.data);
  const { data, loading, message } = useSelector((state) => state.products);
  const products = query
    ? data.filter((product) => product.category === query)
    : data;

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <Box as="section" variant={"section.shop"} sx={styles.section}>
      <Container sx={styles.container}>
        <Header darkBackground />
        <Text sx={styles.category} id="1">
          {query
            ? String(query).trim().charAt(0).toUpperCase() +
                String(query).slice(1) ==
              String("custom").trim().charAt(0).toUpperCase() +
                String("custom").slice(1)
              ? "Custom wigs"
              : String(query).trim().charAt(0).toUpperCase() +
                String(query).slice(1) +
                " Lace "
            : "Shop "}
        </Text>
        <Text sx={styles.subCategory} id="1">
          {subCategory
            ? `${
                String(subCategory).trim().charAt(0).toUpperCase() +
                String(subCategory).slice(1)
              } UNITS
             `
            : ""}
        </Text>
        {/* <Box sx={styles.navigation}>
          <Box sx={styles.navigation.sort}>
            <Image src={params} />
          </Box>
           <Box as="form" sx={styles.navigation.form}>
            <IoIosSearch sx={styles.navigation.form.button} />
            <Box as="label" htmlFor="search" variant="styles.srOnly">
              Search
            </Box>
            <Input
              name="search"
              id="search"
              placeholder="..."
              style={{ textTransform: "uppercase" }}
              sx={styles.navigation.form.input}
            />
          </Box> 
        </Box> */}

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Text style={{ color: "black" }} id="1">
            ({products.length}) Units
          </Text>
          {!loading ? (
            products?.map((product) => (
              <Product product={product} key={product._id} />
            ))
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((ske) => (
                <div>
                  <Skeleton height={250} width={300} style={{ margin: 10 }} />
                  <Skeleton width={300} />
                  <Skeleton width={300} />
                  <Skeleton height={30} width={80} />
                </div>
              ))}
            </>
          )}

          {message && <ErrorMessage>{message}</ErrorMessage>}

          {products.length === 0 && (
            <Heading as="h3" sx={styles.noProductExist}>
              No product found with this name{" "}
              <Link to="/shop">Back to Shop</Link>
            </Heading>
          )}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Shop;

const styles = {
  section: {
    minHeight: "100vh",
    width: "100%",
    position: "absolute",
    top: "0",
    overflowX: "hidden",
    // backgroundImage: [`url(${blurryGradient})`],
    // backgroundPosition: "right",
    // backgroundSize: ["cover"],
    // backgroundRepeat: ["repeat"],
    backgroundImage: `url(${shopBackground})`,
    backgroundAttachment: "fixed",
    backgroundSize: ["contain"],
    backgroundRepeat: ["no-repeat"],
    backgroundColor: "white ",
    // "&:after": {
    //   content: '""',
    //   position: "absolute",
    //   backgroundImage: `url(${CascadingFlowers})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "repeat-y",
    //   top: "-30px",
    //   right: "-79px",
    //   width: "80%",
    //   height: "100vh",
    //   zIndex: "2",
    // },
  },
  container: {
    my: ["20px", "40px"],
  },

  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: "30px",
    svg: {
      width: "30px",
      height: "30px",
      // fill: "",
    },
    img: {
      width: "30px",
      height: "30px",
      svg: {
        // fill: "",
      },
    },
    sort: {
      background: " rgba(26, 0, 0 , 0.38) ",
      boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: " blur(16px) saturate(100%)",
      borderRadius: "15px",
      border: " 1px solid rgba(209, 213, 219, 0.4)",
      py: "5px",
      px: "15px",
      display: "flex",
      cursor: "pointer",
      zIndex: "3",
    },
    cart: {
      position: "relative",
      notificationsCount: {
        position: "absolute",
        textAlign: "center",
        fontSize: "xx-small",
        fontWeight: "600",
        color: "white",
        paddingTop: "0.1rem",
        paddingLeft: "0.1rem",
        top: "0.1rem",
        right: "0.3rem",
        backgroundColor: "accent",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
      },
    },

    form: {
      mx: "10px",
      position: "relative",
      width: "100%",
      maxWidth: ["480px", null, null, "520px"],
      height: ["45px", null, null, "50px", null, null, "50px"],
      input: {
        background: " rgba(26, 0, 0 , 0.38) ",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur(16px) saturate(100%)",
        borderRadius: "15px",
        border: " 1px solid rgba(209, 213, 219, 0.4)",
        position: "absolute",
        top: 0,
        left: 0,
        paddingLeft: "45px",
        width: "100%",
        height: "100%",
        color: "text",
        boxShadow: "none !important",
        outline: "none !important",
        fontSize: ["14px", "18px"],
        fontWeight: "400",
        "&::placeholder": {
          color: "red",
        },
      },
      "input::placeholder": {
        color: "red",
      },
      svg: {
        position: "absolute",
        top: "50%",
        left: "10px",
        padding: 0,
        transform: "translateY(-50%)",
        fontSize: ["16px", "22px"],
        color: "white",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        boxShadow: "none",
        zIndex: "1",
        height: "20px",
        "&:hover": {
          filter: "brightness(1.5)",
          fontSize: ["18px", "24px"],
          backgroundColor: "transparent",
        },
      },
    },
  },
  category: {
    fontSize: "x-large",
    fontWeight: "bold",
    color: "dark",
    textAlign: "center",
    // marginBottom: "5px",
  },
  subCategory: {
    fontSize: "x-large",
    fontWeight: "bold",
    color: "dark",
    textAlign: "center",
    marginBottom: "30px",
  },
  products: {
    gap: ["20px 25px", 25, 25, 30, 30, 30],
    display: "grid",
    gridTemplateColumns: ["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  },
  noProductExist: {
    marginBottom: "30rem",
    a: {
      color: "link",
    },
  },
};
