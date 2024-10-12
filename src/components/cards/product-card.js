/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text } from "theme-ui";
import { Link } from "components/link";
import HeartButton from "components/features/wishlist/heartButton";
import marble from "assets/images/marble.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AddToCart from "components/features/cart/addToCart";

const Product = ({ product }) => {
  return (
    <Container sx={styles.product}>
      <HeartButton height product={product} />
      {/* <AddToCart product={product} /> */}
      <Box sx={styles.product.top}>
        <Link path={`/product/${product._id}`}>
          <Image sx={styles.product.wigImg} src={product.src} alt={"wig"} />
          <Heading as="h4">{product.name} </Heading>
          <Text as="p">Wig description</Text>
        </Link>
      </Box>
      <Box sx={styles.product.footer}>
        <Text as="h4" sx={styles.product.footer.price}>
          ${product.price} usd
        </Text>
        <AiOutlineInfoCircle size="25px" />
        {/* <Image
          src={heart}
          sx={styles.product.footer.wishlist}
          alt="add to wishlist"
          onClick={() => dispatch(addToWishlist(product))}
        /> */}
      </Box>
    </Container>
  );
};

export default Product;

const styles = {
  product: {
    minHeight: "150px",
    width: "100%",
    // background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 12px 0 rgba( 31, 38, 135, 0.17 )",
    backdropFilter: " blur(4px) saturate(100%)",
    // borderRadius: " 15px 15px  0 0",
    border: " 1px solid black",
    backgroundImage: `url(${marble})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    color: "dark",
    px: "0",
    py: "10px",
    top: {
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      textAlign: "center",
    },
    wigImg: {
      height: "120px",
      objectFit: "contain",
      display: "flex",
      mx: "auto",
      marginBottom: "15px",
    },
    p: {
      color: "dark",
      fontSize: "12px",
      // opacity: "0.7",
    },
    h4: {
      // opacity: "0.9",
    },

    footer: {
      mt: "10px",
      pr: "10px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: " center",
      price: {
        mr: "3px",
      },
      zIndex: "30",

      // wishlist: {
      //   width: "30px",
      //   filter: " drop-shadow(3px 5px 2px rgb(31 38 135 / 28%))",
      //   cursor: "pointer",
      //   zIndex: "30",
      // },
    },
  },
};
