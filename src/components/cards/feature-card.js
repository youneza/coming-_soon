/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import { rgba } from "polished";

const FeatureCard = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box sx={styles.feature.imgWrapper}>
        <Image
          src={data?.icon}
          alt={data?.title}
          sx={styles.feature.imgWrapper.img}
        />
        <Box sx={styles.feature.imgWrapper.pluse} />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
      </Box>
    </Box>
  );
};

export default FeatureCard;

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 0.5;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  feature: {
    textAlign: ["center", "center", "center", "center", "center"],
    // maxWidth: [230, 230, 230, 230, "none"],

    margin: "0 auto",
    px: [4, 2, 5],
    py: [5, 5, 4],
    backgroundColor: rgba("#dceefb", 1),
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    zIndex: -2,
    figure: {
      backgroundColor: "white",
      boxShadow: "0px 8px 24px rgba(53, 95, 158, 0.1)",
      height: "90px",
      margin: "auto",
      mb: "20px",
      width: "90px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    },
    imgWrapper: {
      mx: "auto",
      my: 2,
      position: "relative",
      width: ["100px", "95px", "105px", "110px"],
      height: ["100px", "95px", "105px", "110px"],
      img: {
        width: "100%",
        height: "100%",
        mx: "auto",
        p: "2",
        objectFit: "scale-down",
        backgroundColor: "white",
        borderRadius: "50%",
      },
      pluse: {
        position: "absolute",
        top: 0,
        left: 0,
        left: "50%",
        top: "50%",
        zIndex: -1,
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "50%",
        opacity: 0.3,
        animation: `${playPluse} 1.5s ease-out infinite`,
      },
    },

    h4: {
      fontSize: "18px",
      lineHeight: 1.28,
      color: "heading",
      marginBottom: "20px",
    },
    p: {
      fontSize: 16,
      lineHeight: [1.6, 1.6, 1.6, 1.88],
      color: "text",
    },
  },
};
