/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Text, Span } from "theme-ui";

const Rating = ({ rating = 5, numReviews = 86 }) => {
  const ratingNumber = Math.ceil(rating);
  return (
    <Box sx={styles.rating}>
      {[...Array(ratingNumber).keys()].map((s) => (
        <Text as="span" style={{ color: "#ff9933", cursor: "pointer" }}>
          {"\u2605"}
        </Text>
      ))}
      {[...Array(5 - ratingNumber).keys()].map((s) => (
        <Text as="span" style={{ color: "#ff9933", cursor: "pointer" }}>
          {"\u2606"}
        </Text>
      ))}

      {numReviews && <Text as="p">{`${numReviews}`} reviews</Text>}
    </Box>
  );
};

export default Rating;

const styles = {
  rating: {
    span: {
      fontSize: ["25px", "30px"],
      zIndex: "5",
    },
    p: {
      width: "max-content",
      margin: "auto",
      marginTop: "-5px",
      zIndex: "5",
    },
  },
};
