import { Input } from "theme-ui";

export default function InputField({ error, ...rest }) {
  return <Input {...rest} sx={error ? styles && styles.error : styles} />;
}

const styles = {

  width: "255px",
  boxSizing: "border-box",
  border: "3px solid ",
  borderColor: "black",
  padding: "0px",
  borderRadius: "0px",
  marginBottom: "0.5rem",
  transition: "0.3s",
  color: "black",
  error: {
    borderColor: "#ff5b59",
  },

  "&::placeholder": {
    color: "black",
  },
};
