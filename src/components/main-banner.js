/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui";
import Shape from "assets/images/shape.png";
import Circle from "assets/images/circle.svg";

export default function PageTitle({ title = " ", accent = " " }) {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.container}>
        <Heading as="h2" sx={styles.title}>
          {title}
          <span sx={styles.title.accent}> {accent}</span>
        </Heading>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pb: [2, null, 0, null, 2, 0, null, 5],
    pt: ["105px", "105px", "140px", "150px", "150px", "160px"],
    backgroundColor: "#f6fdff",
    zIndex: -1,
  },

  container: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundImage: `url(${Shape})`,
      backgroundPosition: "right",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      top: "-80px",
      right: "0",
      width: "100%",
      height: "100%",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      backgroundImage: `url(${Circle})`,
      backgroundPosition: "left",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      bottom: "-100px",
      left: "-100px",
      width: "100%",
      height: "100%",
    },
  },

  title: {
    fontSize: ["28px", null, "28px", "30px", "36px", "42px", null, "48px"],
    color: "text",
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: "700",
    letterSpacing: "-.5px",
    zIndex: 2,
    pb: 8,
    accent: {
      color: "primary",
    },
  },
};
