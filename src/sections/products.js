/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import Logo from "assets/images/newLogo.png";
import bottomShelf from "assets/images/bottomShelf.png";

import ptb from "assets/images/gif/products-tools-booking.gif";

// import WallBig from "assets/images/wall.png";
import landing from "assets/images/landing.png";
import { keyframes } from "@emotion/core";
import { Link } from "components/link";
import Shelf from "components/Shelf";

const Products = () => {
  return (
    <Box as="section" sx={styles.section}>
      {/* <Box sx={styles.top}>
        <Image src={top} alt="roof" />
      </Box> */}
      <Container sx={styles.wigsWrapper}>
        <Link sx={styles.logo} label="" path="/">
          <Image sx={styles.logo.img} src={Logo} alt="logo" />
        </Link>
        <Link style={{ display: "grid" }} path="/shop" label="">
          <Image sx={styles.sectionHeading} src={ptb} />
        </Link>

        <Box>
          <Shelf data={data.rowOne} />
          <Shelf data={data.rowTwo} />
          <Shelf data={data.rowThree} />
        </Box>
      </Container>
      <Box sx={styles.floor}>
        {/* <Image src={leftPot} sx={styles.leftFlowers} alt="shelf" /> */}
        <Box sx={styles.shelfWrapper}>
          <Image sx={styles.shelfWrapper.shelf} src={bottomShelf} alt="shelf" />
          {/* <Box sx={styles.shelfWrapper.comingSoon}>
            <p>COMING SOON</p>
            <p>COMING SOON</p>
            <p>COMING SOON</p>
          </Box> */}
        </Box>
        {/* <Image src={rightPot} sx={styles.rightFlowers} alt="shelf" /> */}
      </Box>
    </Box>
  );
};

export default Products;
const neon = keyframes`
from {
  filter: drop-shadow(0px 0px 1px #fff)
  drop-shadow(0px 0px 3px #e50300)
  drop-shadow(0px 0px 10px #ff5b59)
  drop-shadow(0px 0px 30px #fc0906)
  drop-shadow(0px 0px 50px #e50300);
}

to {
  filter: drop-shadow(0px 0px 3px #fff)
  drop-shadow(0px 0px 6px #e50300)
  drop-shadow(0px 0px 15px #ff5b59)
  drop-shadow(0px 0px 40px #fc0906)
  drop-shadow(0px 0px 60px #e50300); 
}
`;

const styles = {
  section: {
    height: "100%",
    // width: "100vh",
    backgroundImage: [`url(${landing})`],
    backgroundPosition: "center",
    backgroundSize: ["cover"],
    backgroundRepeat: ["no-repeat"],
    position: "absolute",
    top: "0",
  },
  wigsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "75%",
    mt: "20%",
  },
  logo: {
    img: {
      height: [" 100px", " 100px", " 13vh", "20vh"],
      mt: "15px",

      objectFit: "contain",
      stroke: "#fff",
      // animationName: `${neon} `,
      animationDuration: " 0.8s",
      animationIterationCount: "infinite",
      animationDirection: " alternate",
      cursor: "pointer",
    },
  },
  sectionHeading: {
    mb: "20px",
    cursor: "pointer",
    mx: "auto",
    width: "50%",
  },
  top: {
    zIndex: " 1",
    width: " 100vw",
    height: [" 50px", " 50px", " 60px"],
    display: "flex",
    // backgroundColor: " #e3d8d7",
    // backgroundImage: `url(${top})`,
    // backgroundPosition: " center",
    // backgroundSize: " cover",
    // backgroundRepeat: " no-repeat",
  },
  floor: {
    zIndex: " 2",
    width: " 100vw",
    // height: ["20vh"],
  },
  shelfWrapper: {
    mt: "2.5vh",
    shelf: {
      position: "absolute",
      right: ["20%"],
      bottom: [" 11.5vh !important"],
      width: [" 60%", " 70%", " 70%", " 55%"],
      zIndex: "3",
      mx: "auto",
    },
    comingSoon: {
      fontSize: " 7px",
      position: " absolute",
      position: " absolute",
      right: " 44%",
      bottom: " 17.5vh !important",
      zIndex: " 3",
      p: {
        mb: "20px",
        filter:
          "drop-shadow(0px 0px 1px #fff) drop-shadow(0px 0px 1px #e50300) drop-shadow(0px 0px 0px #ff5b59) drop-shadow(0px 0px 30px #fc0906) drop-shadow(0px 0px 9px #e50300)",
        color: "accent",
      },
    },
  },
  leftFlowers: {
    height: ["140px", "140px", "35%"],
    position: "absolute",
    transform: "translateX(0%)",
    left: ["calc(0% - 0px)", "calc(0% - 0px)", "calc(0% - 195px)"],
    bottom: ["17.5vh"],
    zIndex: "3",
  },
  rightFlowers: {
    height: ["140px", "140px", "35%"],
    position: "absolute",
    transform: "translateX(0%)",
    right: ["calc(0% - 0px)", "calc(0% - 0px)", "calc(0% - 195px)"],
    bottom: ["17.5vh"],
    zIndex: "3",
  },
};
