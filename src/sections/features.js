/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import FeatureCard from "components/cards/feature-card";

import One from "assets/images/icons/feature1.png";
import Two from "assets/images/icons/feature2.png";
import Three from "assets/images/icons/feature3.png";

const data = [
  {
    id: 1,
    icon: One,
    title: "Veterans’ Mental Health Issues",
    description:
      "Servicemen and women have always taken care of their physical health. In today’s world, mental health is just as important.",
  },
  {
    id: 2,
    icon: Two,
    title: "Veteran Family Support",
    description:
      "Watch Veterans and their family members share real stories of strength and recovery, find useful information and local mental health resources, and explore ways to show your support.",
  },
  {
    id: 3,
    icon: Three,
    title: "Treatment & Resources",
    description:
      "No matter what you may be experiencing, there is support for getting your life on a better track. Many, many Veterans have found the strength to reach out and make the connection.",
  },
];

const Features = () => {
  return (
    <Box as="section" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="WHO IS IMPEERFORYOU FOR? "
          description="Better access to mental healthcare improves patient outcomes."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <FeatureCard key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
      "repeat(3, 1fr)",
    ],
  },
};
