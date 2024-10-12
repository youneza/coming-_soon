/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Image,
  Heading,
  Text,
  Button,
  Select,
  Textarea,
} from "theme-ui";

import Message from "./form/error";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "./link";
import { addReview } from "redux/productDetails/productDetailsSlice";
import Rating from "./rating";

const AddReview = ({ id, reviews = [] }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const username = user?.username;
  const userId = user?._id;

  //check if already reviewed
  const alreadyReviewed = reviews.find(
    (r) => r.user.toString() === userId?.toString()
  );

  // add review

  const initialValues = {
    comment: "",
    rating: 0,
    username,
  };
  const addReviewHandler = (values) => {
    dispatch();
    addReview({
      review: values,
      productId: id,
    });
  };
  return (
    <Box sx={styles.addReview}>
      <Box>
        <Heading as="h2">Reviews :</Heading>
        <Box>
          {reviews.length === 0 && (
            <Message sx={styles.addReview.message}>
              This product has no reviews yet
            </Message>
          )}
          {reviews.map((review) => (
            <Box sx={styles.review} key={review._id}>
              <strong>{review.username}</strong>
              <Rating rating={review.rating} />
              <Heading as="h6">{review.createdAt.substring(0, 10)}</Heading>
              <Text sx={styles.comment}>{review.comment}</Text>
            </Box>
          ))}
          <Box>
            <Heading as="h3">Write a Customer Review :</Heading>
            {username ? (
              !alreadyReviewed ? (
                <Formik
                  initialValues={initialValues}
                  onSubmit={addReviewHandler}
                >
                  <Form>
                    <Box>
                      <Heading as="h4">Rating</Heading>
                      <Select
                        name="rating"
                        as="select"
                        // value={rating}
                        // onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </Select>
                    </Box>
                    <Box controlId="comment">
                      <Heading as="h4">Comment</Heading>

                      <Textarea
                        as="textarea"
                        name="comment"
                        placeholder="write review"
                      />
                    </Box>
                    <Button
                      // disabled={loadingProductReview}
                      type="submit"
                      variant="darkGlass"
                    >
                      Add Review
                    </Button>
                  </Form>
                </Formik>
              ) : (
                <Message sx={styles.loginMessage}>
                  You Already reviewed this product
                </Message>
              )
            ) : (
              <Message sx={styles.loginMessage}>
                Please <Link path="/login">sign in</Link> to write a review{" "}
              </Message>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddReview;

const styles = {
  addReview: {
    mt: ["50px", "60px"],
    py: ["20px", "30px"],
    borderTop: "2px solid rgba( 255,255,255,0.3 )",
    borderRadius: "0",

    message: {
      color: "link",
    },
    form: {
      margin: "2rem 0",
    },
    h2: {
      fontSize: "1.2rem",
      mb: "20px",
    },
    h3: {
      marginTop: "30px",
      fontSize: "1rem",
    },
    h4: {
      my: "1rem",
      fontSize: "0.9rem",
    },
    button: {
      marginTop: "15px",
      width: ["100%", "auto"],
    },
    option: {
      color: "black",
    },
    select: {
      outline: "none",
    },
    input: {
      outline: "none",
      "&::placeholder": {
        color: "red",
      },
    },

    textarea: {
      outline: "none",
    },
    review: {
      padding: "10px",
      marginBottom: "10px",

      comment: {
        marginTop: "5px",
      },
    },

    loginMessage: {
      marginTop: "10px",
      a: {
        color: "link",
      },
    },
  },
};
