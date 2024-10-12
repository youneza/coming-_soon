/** @jsxRuntime classic */
/** @jsx jsx */
import Rating from "components/rating";
import { jsx, Box, Image, Heading, Text } from "theme-ui";

const Testimonial = ({ item }) => {
  return (
    <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
      <Rating rating={item.review} />
      <Text sx={styles.description}>{item.description}</Text>
      <div className="card-footer">
        <div className="image">
          <Image src={item.avatar} alt="Client Image" />
        </div>
        <div className="reviewer-info">
          <Heading as="h4" sx={styles.heading}>
            {item.name}
          </Heading>
          <Text sx={styles.designation}>{item.designation}</Text>
        </div>
      </div>
    </Box>
  );
};

export default Testimonial;

const styles = {
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 40px 40px 40px",
      "30px 30px 30px",
      "40px 40px 40px 40px",
    ],
    bg: "white",
    textAlign: "center",
    // m: [
    //   "28px 5px 30px 5px",
    //   "28px 20px 30px 20px",
    //   "28px 15px 30px 15px",
    //   "28px 15px 30px 15px",
    //   "30px 20px 40px",
    // ],
    m: 0,
    mx: "20px",
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],

      ul: {
        px: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
        justifyContent: "center",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      mx: "auto",
      p: 0,
      mx: 0,
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },

  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  ".reviewer-info": {
    mx: "auto",
    m: 0,
    p: 0,
    display: "none",
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
