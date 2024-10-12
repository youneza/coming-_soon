/** @jsx jsx */
import { jsx, Box, Flex, Image } from "theme-ui";
import { LearnMore, Link } from "components/link";
import SectionHeading from "components/section-heading";

const Sub = ({ post }) => {
  return (
    <Box sx={styles.post}>
      <Flex as="figure" sx={styles.postImage}>
        <Image loading="lazy" src={post?.thumb} alt={post?.title} />
      </Flex>
      <SectionHeading
        sx={styles.heading}
        title={post?.title}
        description={post?.description}
      />
      <Box sx={styles.explore}>
        <LearnMore path={post.link} label="Learn More" />
      </Box>
    </Box>
  );
};

export default Sub;

const styles = {
  post: {
    m: [0, 0, 0, "0 15px", 0],
    figure: {
      alignItems: "flex-start",
      mb: 20,
    },
    img: {
      borderRadius: "10px",
    },
    h4: {
      fontWeight: 500,
      fontSize: [14, 16, 20],
      lineHeight: 1.5,
      a: {
        cursor: "pointer",
        color: "text",
        textDecoration: "none",
      },
    },
  },
  heading: {
    mb: [3],
  },
  explore: {
    mb: "40px",
    textAlign: "center",
  },
};
