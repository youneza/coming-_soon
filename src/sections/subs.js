/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SectionHeading from "components/section-heading";
import SubCard from "components/cards/sub";
import { useRouter } from "next/router";

// import thumb1 from "assets/images/subs/thumb1.webp";
// import thumb2 from "assets/images/subs/thumb2.webp";
// import thumb3 from "assets/images/subs/thumb3.webp";
// import thumb4 from "assets/images/tbi.webp";

const data = [
  // {
  //   id: 1,
  //   thumb: thumb1,
  //   title: `Anxiety`,
  //   link: "/mental-health/anxiety",
  //   description: `Feeling anxious is a normal reaction to stress, and everyone... `,
  // },
  // {
  //   id: 2,
  //   thumb: thumb2,
  //   title: "Depression",
  //   link: "/mental-health/depression",
  //   description: `Depression commonly occurs after traumatic events. It is...`,
  // },
  // {
  //   id: 3,
  //   thumb: thumb3,
  //   title: `PTSD`,
  //   link: "/mental-health/ptsd",
  //   description: `Post-traumatic stress disorder, or PTSD, is a condition that...`,
  // },
  // {
  //   id: 4,
  //   thumb: thumb4,
  //   title: `TBI`,
  //   link: "/mental-health/tbi",
  //   description: `Traumatic Brain Injury or TBI, is a common deployment-related...`,
  // },
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
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: "unslick",
    },
  ],
};

const Subs = () => {
  const router = useRouter();
  return (
    <Box id="subs" as="section" variant="section.features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="FIND HELP WITH "
          description="we help people living with a variety of mental heath conditions"
        />

        <Slider
          sx={styles.section.blogWrapper}
          {...settings}
          className={
            router.pathname !== "/" && router.pathname !== "/mental-health"
              ? "threeColumns"
              : ""
          }
        >
          {data?.map((post) =>
            router.pathname == post.link ? null : (
              <SubCard key={post.id} post={post} />
            )
          )}
        </Slider>
      </Container>
    </Box>
  );
};

export default Subs;

const styles = {
  section: {
    pt: [30, 30, 6],
    pb: [50, 50, 50, 100, 8, 9],
    blogWrapper: {
      gap: ["35px 40px", 40, 40, 40, 30, 60],
      display: ["grid", "grid"],
      gridTemplateColumns: [
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ],
      m: [0, 0, 0, "0 -15px", 0],
    },
    ".threeColumns": {
      gridTemplateColumns: [
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ],
    },
  },
  heading: {
    mb: [80, 80, 60, 60],
    h2: {
      color: "heading",
      fontWeight: 500,
      fontSize: ["34px", "40px"],
      lineHeight: [1.25, 1.5],
      letterSpacing: "heading",
    },
    p: {
      fontSize: ["18px", "20px"],
      mt: "15px",
    },
  },

  paginationButton: {
    minHeight: "30px",
    padding: 0,
    position: "absolute",
    bottom: "-60px",
    ":focus": {
      outline: "0 none",
    },
    svg: {
      transition: "all 0.2s ease-in-out 0s",
    },
    "&.slick-disabled": {
      color: "#BBC7D7",
      svg: {
        transform: "scale(0.8)",
      },
    },
    "&.slick-prev": {
      left: "calc(50% - 16px)",
      transform: "translateX(-50%)",
    },
    "&.slick-next": {
      transform: "translateX(50%)",
      right: "calc(50% - 16px)",
    },
  },
};
