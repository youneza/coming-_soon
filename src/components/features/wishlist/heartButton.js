/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import {
  removeFromWishlist,
  addToWishlist,
} from "redux/wishlist/wishlistSlice";
import heart from "assets/images/icons/heartAnimation.png";
import { useDispatch, useSelector } from "react-redux";
import { keyframes } from "@emotion/core";

const HeartButton = ({ product, height, ...rest }) => {
  const dispatch = useDispatch();

  const isProductInWishlist = useSelector((state) =>
    state.wishlist.data.find((item) => item._id === product._id)
  );

  return (
    <Box sx={styles.heartWrapper} {...rest}>
      {isProductInWishlist ? (
        <Box
          sx={styles.inHeart}
          onClick={() => dispatch(removeFromWishlist(product._id))}
          style={{ height: height ? "40px" : "80px" }}
        ></Box>
      ) : (
        <Box
          style={{ height: height ? "40px" : "80px" }}
          sx={styles.heart}
          onClick={() => dispatch(addToWishlist(product))}
        ></Box>
      )}
    </Box>
  );
};

export default HeartButton;

const heartBurst = keyframes`
  from {
    background-position: left;
  }

  to {
    background-position: right;
  }
`;

const styles = {
  inHeart: {
    cursor: "pointer",
    height: "80px",
    width: "80px",
    backgroundImage: `url(${heart})`,
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "2900%",
    backgroundPosition: "right",
    animation: `${heartBurst} .8s steps(28) 1`,

    // backgroundColor: "lightRed",
    // borderRadius: "50%",
  },
  heart: {
    cursor: "pointer",
    height: "80px",
    width: "80px",
    backgroundImage: `url(${heart})`,
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "2900%",

    // backgroundColor: "lightRed",
    // borderRadius: "50%",
  },
};
