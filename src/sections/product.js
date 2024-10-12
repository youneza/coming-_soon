/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text, Button } from "theme-ui";
import blurryGradient from "assets/images/blurryGradient3.svg";
import CascadingFlowers from "assets/images/cascadingFlowersHQ.svg";
import flowersTwo from "assets/images/f3.svg";

import wig from "assets/images/transparent.png";
import ShowMoreText from "react-show-more-text";
import Rating from "../components/reviews";
import { useState } from "react";
import AddToCart from "components/features/cart/addToCart";
import Header from "components/header/header";
import AddReview from "components/addReview";
import { useSelector } from "react-redux";
import marble from "assets/images/marble.png";
import wig2 from "assets/images/wigs/2.png";
import wig3 from "assets/images/wigs/3.png";
import HeartButton from "components/features/wishlist/heartButton";
import Carousel from "components/carousels/products";
import ProductQty from "components/features/cart/productQty";

const Product = ({ query }) => {
  // const [qty, setQty] = useState(1);

  const { data, loading, message } = useSelector((state) => state.products);
  const product = data.filter((product) => product._id == query)[0];

  const imgArray = [product, { src: wig2, id: 3 }, { src: wig3, id: 2 }];

  return (
    <Box as="section" variant={"section.product"} sx={styles.section}>
      <Container sx={styles.container}>
        <Header darkBackground />
        <Box sx={styles.product}>
          {product ? (
            <>
              <HeartButton
                style={{ display: "flex", justifyContent: "flex-end " }}
                product={product}
              />
              {/* <Image sx={styles.product.src} src={product.src} alt={"wig"} /> */}
              <Carousel data={imgArray} />
              <Box sx={styles.product.footer}>
                <Text as="h3" sx={styles.product.footer.price}>
                  ${product.price} usd
                </Text>
                <Text as="h3" sx={styles.product.footer.price}>
                  cap selection
                </Text>
                <Box sx={styles.product.footer.addToCart}>
                  <ProductQty
                    id={product._id}
                    qty={product.qty}
                    countInStock={product.countInStock}
                  />

                  <AddToCart product={{ ...product }} />
                </Box>
              </Box>
              <Box sx={styles.product.header}>
                <Heading as="h2">{product.name}</Heading>
                <Rating numReviews={87} rating={5} />
              </Box>
              <Box sx={styles.product.middle}>
                <Text as="h4">Wig description</Text>
                <ShowMoreText
                  /* Default options */
                  lines={4}
                  more="Show more"
                  less="Show less"
                  className="showMore"
                  anchorClass="showMoreAnchor"
                  sx={styles.showMore}
                  // onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                  truncatedEndingComponent={"... "}
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                  consequat urna. Morbi a bibendum metus. Donec scelerisque
                  sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in
                  pretium orci vestibulum eget. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
                  lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer
                  eu nibh at nisi ullamcorper sagittis id vel leo. Integer
                  feugiat faucibus libero, at maximus nisl suscipit posuere.
                  Morbi nec enim nunc.{" "}
                </ShowMoreText>
              </Box>

              <AddReview />
            </>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
};

export default Product;

const styles = {
  section: {
    width: "100%",
    position: "absolute",
    top: "0",
    // backgroundImage: [`url(${blurryGradient})`],
    backgroundImage: `url(${marble})`,
    backgroundSize: ["contain"],
    backgroundRepeat: ["repeat-y"],
    // "&:before": {
    //   content: '""',
    //   position: "absolute",
    //   backgroundImage: `url(${CascadingFlowers})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "repeat-y",
    //   top: "-47px",
    //   right: "0px",
    //   width: "100%",
    //   height: "100vh",
    //   zIndex: "2",
    // },
    // "&:after": {
    //   content: '""',
    //   position: "absolute",
    //   backgroundImage: `url(${flowersTwo})`,
    //   // backgroundPosition: "right",
    //   backgroundSize: "contain",
    //   backgroundRepeat: "no-repeat",
    //   bottom: "0",
    //   left: "-60px",
    //   width: "232px",
    //   height: "100vh",
    //   zIndex: "0",
    // },
  },
  showMore: {
    a: { textDecoration: "none", color: "link" },
    fontSize: "0.9rem",
  },

  container: {
    my: ["20px", "40px"],
  },

  product: {
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(2px) saturate(100%)",
    border: "black 1px solid",
    // border: " 1px solid rgba(209, 213, 219, 0.4)",
    position: "relative",
    width: "90%",
    mx: "auto",
    color: "dark",
    padding: ["20px", "40px"],
    zIndex: "2",
    src: {
      height: "250px",
      display: "flex",
      mx: "auto",
      mb: "15px",
    },
    p: {
      color: "dark",
      fontSize: "12px",
      opacity: "0.7",
    },

    header: {
      mt: "10px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",

      h2: {
        fontSize: "1.2rem",
      },
    },
    middle: {
      mt: "30px",
      h4: {
        mb: "10px",
        fontSize: "1rem",
      },
    },
    footer: {
      mt: "25px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: " center",
      price: {
        fontSize: "1rem",
      },
      addToCart: {
        display: "flex",
        justifyContent: "center",
        alignItems: " center",
      },

      // productQty: {
      //   padding: "0",
      //   border: "1px solid #ec5d55",
      //   borderRadius: "20px",
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      //   fontSize: "18px",
      //   mr: 2,

      //   button: {
      //     backgroundColor: "transparent",
      //     color: "lightRed",
      //     fontSize: "25px",
      //     py: 0,
      //   },
      // },
    },
  },
};
