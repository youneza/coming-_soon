/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Image } from "theme-ui";
import { useDispatch } from "react-redux";
import trashCan from "assets/images/icons/trash.svg";
const RemoveProduct = ({ _id, removeFromCart }) => {
  const dispatch = useDispatch();

  return (
    <Heading
      as="h5"
      sx={styles.RemoveProductFCart}
      onClick={() => dispatch(removeFromCart(_id))}
    >
      {/* REMOVE */}
      <Image
        sx={styles.RemoveProductFCart.trashCan}
        src={trashCan}
        alt="trash can"
      />
    </Heading>
  );
};

export default RemoveProduct;

const styles = {
  RemoveProductFCart: {
    color: "error",
    cursor: "pointer",
    " &::after ": {
      backgroundColor: "error",
    },
    trashCan: {
      width: "25px !important ",
      height: "25px  !important",
    },
  },
};
