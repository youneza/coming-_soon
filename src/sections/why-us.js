/** @jsx jsx */
import { jsx, Box, Container, Heading } from "theme-ui";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import WhyUs1 from "assets/images/whyus1.webp";
import WhyUs2 from "assets/images/whyus2.webp";
import WhyUs3 from "assets/images/whyus3.webp";
import Accordion from "components/secondAccordion/accordion";

const data = {
  values: [
    {
      title: " ",
      contents: (
        <ul>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Hope : {""}
            </Heading>{" "}
            We believe in the possibility of recovery, wellness and the
            potential in all of us.
          </li>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Inclusion : {""}{" "}
            </Heading>{" "}
            We embrace diverse backgrounds, cultures and perspectives.
          </li>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Empowerment : {""}{" "}
            </Heading>{" "}
            We promote confidence, self-efficacy and service to our mission.
          </li>
          <li>
            {" "}
            <Heading as="h4" style={{ display: "inline" }}>
              Compassion : {""}{" "}
            </Heading>{" "}
            We practice respect, kindness and empathy.
          </li>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Fairness : {""}{" "}
            </Heading>{" "}
            We fight for equity and justice.
          </li>
        </ul>
      ),
    },
  ],
};

const WhyUs = () => {
  return (
    <Box as="section" variant="section.whyUs">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={WhyUs1} alt="our vision" className="image" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Our Vision"
              description="FrontalSlayer provides the highest quality beauty and hair products in the industry while ensuring professional and informed expert assistance for a seamless online shopping experience."
            />
          </Box>
        </Box>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Our Mission              "
              description="With the ever-increasing popularity of online shopping, we continually strive to instill confidence in our clients by offering quality beauty and hair products and industry insider expertise. We want to be the leading internet beauty source for wearable hair with a customer service experience beyond reproach. We believe everyone can and deserves to be beautiful!  "
            />
          </Box>
          <Box sx={styles.leftContent}>
            <Image src={WhyUs2} alt="our mission" className="image" />
          </Box>
        </Box>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={WhyUs3} alt="our values" className="image" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="What Makes Us Different
              "
              description="Your shopping experience is our top priority. We want every one of our clients to look and feel fabulous. We go the extra mile to bring you comprehensive videos, images, and guides to help you find exactly what you are looking for. To serve you best!"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: "grid",
    // gridTemplateColumns: "1fr 1fr",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      "repeat(1,1fr)",
      "repeat(1,1fr)",
      "repeat(2,1fr)",
    ],
    alignItems: "center",
    mx: ["10px", "15px", "20px", "60px"],
  },
  leftContent: {
    display: "grid",
    placeContent: "center",
    ml: [0, 0, 0, "inherit", "inherit"],
    ".image": {
      backgroundColor: "#dceefb",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      height: ["300px", "400px", "500px"],
      width: ["100%", "100%", "100%", "100%"],
      objectFit: "cover",
      my: ["5px", "10px", "30px", "0px"],
    },
  },
  rightContent: {
    marginLeft: ["15px", "20px", "60px"],
  },
  heading: {
    textAlign: "left",
    mb: ["20px"],
    mt: [0, 0, 0, 0, "-70px"],
    h2: {
      fontSize: ["24px", "24px", "24px", "28px", "32px", "40px"],
      lineHeight: [1.45, 1.5],
      letterSpacing: "-1.5px",
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: "flex",
    alignItems: "center",
    img: {
      mr: "10px",
    },
  },
  explore: {
    mt: ["20px", "20px", "20px", "20px", "40px"],
  },
};
