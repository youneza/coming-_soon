import { Input } from "theme-ui";

export default function InputField({ error, ...rest }) {
  return <Input {...rest} sx={error ? styles && styles.error : styles} />;
}

const styles = {
  width: " 100%",
  boxSizing: "border-box",
  border: "3px solid ",
  borderColor: "black",
  padding: " 0.8rem 1rem",
  borderRadius: "7px",
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
