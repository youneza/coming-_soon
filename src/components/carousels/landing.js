/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import Slider from "react-slick";
import CarouselCard from "components/cards/carouselCard";
import WigOne from "assets/images/wigone.webp";
import WigTwo from "assets/images/wigtwo.webp";
import WigThree from "assets/images/wigthree.webp";

import { rgba } from "polished";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Most streamed artist in Arab Mena",
    src: WigOne,
    alt: "Elgrande Toto",

    review: 5,
  },
  {
    id: 2,
    title: "One the most streamed artist",

    src: WigTwo,
    alt: "Tagne",
    review: 5,
  },
  {
    id: 3,
    title: "One the most streamed artist",

    src: WigOne,
    alt: "Stormy",
    review: 5,
  },
  {
    id: 4,
    alt: "Biggest arabic album",
    src: WigThree,
    name: "inkonnu",
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === "prev" ? (
        <IoIosArrowDropleft size="32px" fill="#ffc0c0" />
      ) : (
        <IoIosArrowDropright size="32px" fill="#ffc0c0" />
      )}
    </Button>
  );
}
const settings = {
  arrows: true,
  dots: true,
  speed: 500,
  pauseOnFocus: true,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
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

const Testimonials = () => {
  return (
    <Container sx={styles.container}>
      <Slider sx={styles.slider} {...settings}>
        {data.map((item) => (
          <CarouselCard key={item.id} item={item} />
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;

const styles = {
  container: {
    mx: "auto",
    mb: "20px",
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
    },
    "&.slick-disabled": {
      color: "#BBC7D7",
      svg: {
        transform: ["scale(0.6)", "scale(0.8)"],
      },
    },
    "&.slick-prev": {
      left: 0,
      transform: "translateX(0%)",
      left: "calc(0% - 32px)",
    },
    "&.slick-next": {
      transform: "translateX(0%)",
      right: "calc(0% - 32px)",
      // right: 0,
    },
  },
  slider: {
    width: ["160px", "220px", "250px"],
    height: ["160px", "220px", "250px"],
    mx: "auto",
    ".slick-list": {
      // mx: [null, null, null, null, -2, 0],
    },
    ".slick-slide": {
      // mr: [null, null, null, null, 4, 0],
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
};
