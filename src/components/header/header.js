/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading } from "theme-ui";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { Link } from "../link";
import MobileDrawer from "./mobile-drawer";
import { openCart } from "../../redux/cart/cartSlice";
import CartIcon from "components/features/cart/cartIcon";
import search from "assets/images/icons/darkSearch.svg";

const Header = () => {
  const router = useRouter();

  return (
    <Box sx={styles.header}>
      <Box sx={styles.header.box}>
        <IoIosArrowBack
          sx={styles.header.backIcon}
          color="black"
          size="20px"
          onClick={() =>
            router.pathname == "/shop" ? router.push("/") : router.back()
          }
        />
        <Image src={search} alt="search" sx={styles.header.search} />
      </Box>

      <Link path="/">
        <Heading as="h2">Frontal Slayer</Heading>
      </Link>
      {/* <Navigation sx={styles.header.burger} /> */}
      <Box sx={styles.header.box}>
        <CartIcon />
        <MobileDrawer dark />
      </Box>
    </Box>
  );
};

export default Header;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: "30px",
    color: "text",
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(2px) saturate(100%)",
    border: " 1px solid black",
    py: "5px",
    px: "15px",
    position: "sticky",
    top: "0px",
    zIndex: "20",

    h2: {
      cursor: "pointer",
      textShadow: "1px 1px 1px #000",
      fontSize: "1.2rem",
      color: "dark",
    },
    search: {
      height: "17px",
      width: "20px",
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > div": {
        mr: "10px",
      },
    },
  },
};
