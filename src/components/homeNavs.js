/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui";
import { Link } from "components/link";
import { motion } from "framer-motion";
export default function LeftNav({ ...props }) {
  const menuItems = [
    {
      path: "/",
      label: "HOME",
    },
    {
      path: "products",
      label: "PRODUCTS",
    },
    {
      path: "about",
      label: "ABOUT US",
    },
    {
      path: "/faq",
      label: "FAQ",
    },
    {
      path: "/contact",
      label: "CONTACT",
    },
  ];
  return (
    <Box sx={styles.left} {...props}>
      <Flex as="ul">
        {menuItems?.map((item, index) => (
          <li sx={styles.listItem} key={index}>
            <Link path={item?.path}>{item?.label}</Link>
          </li>
        ))}
      </Flex>{" "}
    </Box>
  );
}

export function RightNav({ ...props }) {
  const menuItems = [
    {
      path: "/products",
      label: "PRODUCTS",
    },
    {
      path: "/products/hd-lace",
      label: "HD LACE",
    },
    {
      path: "/products/transparent-lace",
      label: "TRANSPARENT LACE",
    },

    {
      path: "/products/custom",
      label: "CUSTOM WIGS",
    },
  ];
  return (
    <motion.Box
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      sx={styles.right}
      {...props}
    >
      <Flex as="nav" sx={styles.navbar}>
        <Box as="ul" sx={styles.navList}>
          {menuItems?.map((item, index) => (
            <li sx={styles.listItem} key={index}>
              <Link path={item?.path}>{item?.label}</Link>
            </li>
          ))}
        </Box>
      </Flex>
    </motion.Box>
  );
}

const styles = {
  left: {
    alignSelf: "flex-start",
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      p: 0,
    },
  },
  navbar: {
    display: "flex",
    justifySelf: "flex-end",
    alignItems: "flex-end",
    height: "60vh",
    // left: ["5%", "5%", "5%", "5%", "10%", "15%", "15%", "15%"],
  },
  navList: {
    listStyle: "none",
    marginLeft: "auto",
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      p: 0,
    },
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
    },
    ".active": {
      "&:after": {
        content: "''",
        position: "absolute",
        width: "100%",
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
        height: "2px",
        bottom: " -5px",
        left: "0",
        backgroundColor: "text",
        transition: "transform 0.25s ease-out",
      },
    },
  },
  listItem: {
    mb: 20,
    cursor: "pointer",
    position: " relative",
    width: "fit-content",

    "&:after": {
      content: "''",
      position: "absolute",
      width: "100%",
      transform: " scaleX(0)",
      height: "2px",
      bottom: " -5px",
      left: "0",
      backgroundColor: "text",
      transformOrigin: " bottom right",
      transition: "transform 0.25s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "  bottom left",
    },
  },
  right: {
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
    },
    "@media only screen and (max-width: 768px)": {
      display: "none",
    },
  },
};
