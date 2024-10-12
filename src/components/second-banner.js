/** @jsx jsx */
import { jsx, Container, Heading, Box } from "theme-ui";
import PatternBG from "assets/images/new_banner.png";
import { padding } from "polished";

export default function Banner({ title = " ", accent = " " }) {
  return (
    <section sx={styles.banner}>
      <Box sx={styles.bannerBackground}>
        <Container sx={styles.container}>
          {/* <Heading as="h2" sx={styles.title}>
            {title}
            <span sx={styles.title.accent}> {accent}</span>
          </Heading> */}
        </Container>
      </Box>
    </section>
  );
}

const styles = {
  banner: {
    
    // pb: [2, null, 0, null, 2, 0, null, 5],
    // pt: ["105px", "105px", "140px", "150px", "150px", "160px"],
    
    background: "rgba(233,244,248,1) ",
    // padding:"250px",
    py:"300px",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",

   

    "@media screen and (max-width:760px)": {
      // backgroundImage: "none",
      // background: "rgba(233,244,248,1) ",
    },
  },

  

  title: {
    zIndex: 5,
    filter: " brightness(1.3)",
    textAlign: "center",
    textShadow: [
      "-1px 0px 0px #343D48,2px 2px 0px #343D48,3px 3px 0px black",
      "-1px -1px 0px #343D48,3px 3px 0px #343D48,6px 6px 0px black",
    ],
    fontSize: ["28px", null, "28px", "30px", "36px", "42px", null, "48px"],
    color: " background",
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: "700",
    letterSpacing: "-.5px",
    pb: 8,

    accent: {
      color: "primary",
      display: "inherit",
    },
  },
};
