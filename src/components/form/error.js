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
  ml: "5px",
};
