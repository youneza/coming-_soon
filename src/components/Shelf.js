/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Text } from "theme-ui";
import shelf from "assets/images/shelf.png";
import { Link } from "components/link";

const Shelf = ({ data }) => {
  console.log("data", data.path);
  return (
    <Container sx={styles.container}>
      <Box sx={styles.wigs}>
        {data.products.map((item) => (
          <Link path={data.path} label="">
            <Box sx={styles.wigs.imgWrapper} key={item.id}>
              <Image src={item.src} alt={item.alt} />
              <Link path={item.path}>
                <Image
                  sx={styles.wigs.imgWrapper.title}
                  src={item.label}
                  alt={item.alt}
                />
              </Link>
            </Box>
          </Link>
        ))}
      </Box>
      <Box sx={styles.shelfWrapper}>
        <Image sx={styles.shelfWrapper.shelf} src={data.shelf} />
        {/* <Link path={data.path} label={data.title} /> */}

        {/* <Image
            // sx={data.path == "/products/custom" ? styles.customImage : ""}
            src={data.title}
            label={data.title}
          /> */}
      </Box>
    </Container>
  );
};

export default Shelf;

const styles = {
  container: {
    width: "60%",
    p: 0,
    mb: ["10px"],
  },
  customImage: {
    height: "8px !important",
  },

  wigs: {
    display: "flex",
    mx: "auto",
    zIndex: "2",

    imgWrapper: {
      display: "grid",
      placeItems: "center",
      position: "relative",
      title: {
        position: "absolute",
        top: " 10px",
        m: "0",
        width: "76% !important",
        height: "16%",
        objectFit: "cover",
        left: "50%",
        transform: "translateX(-50%)",
      },
      img: {
        width: "50%",
        mx: "auto",
      },
    },
  },
  shelfWrapper: {
    display: "grid",
    placeItems: "center",
    position: "relative",
    top: "-6px",
    zIndex: "2",
    shelf: {
      width: ["100%"],
      objectFit: "contain",

      // height: "20px",
      // filter: "drop-shadow(0px 4px 1px #fff9b7)",
    },
    a: {
      position: "absolute",
      cursor: "pointer",
      top: "50%",
      transform: "translateY(1%)",
      m: "0",
      p: "0",
      color: "#FF7469",
      zIndex: "6",
      fontSize: "7px",

      textShadow:
        "  0 0 5px  #FFAD9A,0 0 10px  #FFAD9A,0 0 20px  #FFAD9A,0 0 40px #FFAD9A,0 0 80px #FFAD9A,0 0 90px #FFAD9A,0 0 100px #FFAD9A,0 0 150px #FFAD9A;",
      img: {
        height: "6px",
      },
    },
  },
};
