/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo.gif";
import { keyframes } from "@emotion/core";
import { motion } from "framer-motion";

export default function Logo({ home, noLogo, ...props }) {
  return (
    !noLogo && (
      <motion.Box
        sx={home ? styles.home : styles.logo}
        initial={{ opacity: 0, scale: 0.5, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
          path="/home"
          sx={{
            variant: "links.logo",
          }}
          {...props}
        >
          <Image sx={styles.img} src={logo} alt="logo" />
        </Link>
      </motion.Box>
    )
  );
}
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
  home: {
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: "10",
    "@media only screen and (max-width: 768px)": {
      top: " 50px",
      right: "50%",
      transform: " translateX(50%) !important",
    },
    img: {
      height: "15vh",
    },
  },
  logo: {
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: "10",
  },

  img: {
    height: ["5vh", "15vh"],
    objectFit: "contain",
    stroke: "#fff",
    // animationName: `${neon} `,
    animationDuration: " 0.8s",
    animationIterationCount: "infinite",
    animationDirection: " alternate",
  },
};
