/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from "theme-ui";
import Slider from "react-slick";
import CarouselCard from "components/cards/carouselCard";

import Shelf from "assets/images/shelf.png";

import { rgba } from "polished";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "components/link";

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === "prev" ? (
        <IoIosArrowDropleft size="32px" fill="#ec5d55" />
      ) : (
        <IoIosArrowDropright size="32px" fill="#ec5d55" />
      )}
    </Button>
  );
}
const settings = {
  arrows: true,
  dots: true,
  speed: 500,
  //   pauseOnFocus: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  nextArrow: <SlickArrow fill="#ec5d55" control="next" />,
  prevArrow: <SlickArrow fill="#ec5d55" control="prev" />,

  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = ({ data }) => {
  return (
    <Container sx={styles.container}>
      <Slider sx={styles.slider} {...settings}>
        {data.map((item, i) => (
          <CarouselCard
            sx={styles.productsCarousel}
            key={item.id}
            item={item}
          />
        ))}
      </Slider>
      {/* <Box sx={styles.shelfWrapper}>
        <Image sx={styles.shelfWrapper.shelf} src={Shelf} />
        <Link path={data.path} label={data.title} />
      </Box> */}
    </Container>
  );
};

export default Carousel;

const styles = {
  container: {
    // mx: "auto",
    height: ["auto", "auto", "200px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mb: ["20px"],
  },
  productsCarousel: {
    // width: ["80%", "100%"],
    // height: ["80%", "100%"],
    // mx: ["auto", 0],
  },
  paginationButton: {
    minHeight: "30px",
    padding: 0,
    mx: "-5px",
    position: "absolute",
    top: "calc(50% - 16px)",
    transform: "translateX(-50%)",
    ":focus": {
      outline: "0 none",
    },
    svg: {
      transition: "all 0.2s ease-in-out 0s",
      width: "30px",
    },
    "&.slick-disabled": {
      color: "#BBC7D7",
      svg: {
        transform: "scale(0.8)",
      },
    },
    "&.slick-prev": {
      left: 0,
      transform: "translateX(0%)",
      left: "calc(0% - 0px)",
    },
    "&.slick-next": {
      transform: "translateX(0%)",
      right: "calc(0% - 0px)",
      // right: 0,
    },
  },
  slider: {
    width: ["200px", "120px", "200px", "330px", "30%"],
    mx: "auto",
    ".slick-list": {
      // mx: [null, null, null, null, -2, 0],
    },
    ".slick-slide": {
      // mr: [null, null, null, null, 4, 0],
    },
    img: {
      width: "80% !important",
      height: "80% !important",
      mx: "auto !important",
      // ml: "15px !important",
    },
    ".slick-dots": {
      display: "flex !important",
      margin: 0,
      padding: 0,
      listStyle: "none",
      alignItems: "center",
      justifyContent: "center",
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: "flex",
      },
      button: {
        backgroundColor: rgba("#ec5d55", 0.6),
        borderRadius: 50,
        border: 0,
        cursor: "pointer",
        padding: 0,
        overflow: "hidden",
        textIndent: "-9999em",
        width: 10,
        height: 6,
        outline: 0,
        transition: "all 0.3s ease-in-out 0s",
      },
      ".slick-active button": {
        backgroundColor: "lightRed",
        width: 20,
      },
    },
  },
  shelfWrapper: {
    display: "grid",
    placeItems: "center",
    position: "relative",
    shelf: {
      width: ["80%", "80%", "100%", "100%", "100%", "100%"],
    },
    a: {
      position: "absolute",
      cursor: "pointer",
      top: ["-1px", "-1px", "-1px", "-1px", "-1px"],
      color: "white",
      zIndex: "5",
      fontSize: "smaller",
      textShadow:
        "  0 0 5px  #e50300,0 0 10px  #e50300,0 0 20px  #e50300,0 0 40px #e50300,0 0 80px #e50300,0 0 90px #e50300,0 0 100px #e50300,0 0 150px #e50300;",
    },
  },
};
