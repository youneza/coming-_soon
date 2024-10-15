import { Box } from "theme-ui";

export default ({ children, ...rest }) => {
  return (
    <Box as="span" {...rest} sx={styles}>
      {children}
    </Box>
  );
};

const styles = {
  color: "#ff5b59",
  display: "block",
  "@media screen and (max-width:728px)": {
    fontSize: "12px",
    textAlign: "center",
  },
  mb: "10px",
  fontSize: "18px",
  fontFamily: "Futura Pt,'sans-serif'",
  fontWeight: 600,
  textAlign: "center",
};
