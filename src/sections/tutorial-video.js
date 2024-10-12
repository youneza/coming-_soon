/** @jsx jsx */
import { useState } from "react";
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import { LearnMore } from "components/link";
import videoBanner from "assets/images/video.webp";
import Play from "assets/images/icons/play.png";
import Modal, { CloseButton } from "components/modal/modal";
import ResponsiveIframe from "components/responsive-iframe";

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="section" sx={styles.section} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Best Tutorials For You"
          description="The ULTIMATE MELT From START TO FINISH | Frontal Wig Install For BEGINNERS | Step By Step          "
        />

        <Box sx={styles.videoWrapper}>
          <Modal isOpen={isOpen}>
            <CloseButton
              onClick={() => setIsOpen(false)}
              size="24px"
              color="#fff"
            />
            <ResponsiveIframe
            // src="https://www.youtube.com/embed/uvljGhlGKR4"
            // allow="autoplay; fullscreen"
            // allowFullScreen
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_A-HlGlepA8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </ResponsiveIframe>
          </Modal>

          <Image
            src={videoBanner}
            className="video-banner"
            alt="video banner"
          />
          <Button
            variant="text"
            sx={styles.playPause}
            onClick={() => setIsOpen(true)}
          >
            <Image src={Play} alt="play" /> Watch Full video
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  section: {
    mb: "200px",
  },
  heading: {
    maxWidth: "620px",
    mb: [5],
    h2: {
      letterSpacing: "heading",
    },
  },
  explore: {
    textAlign: ["center"],
    mb: [6],
  },
  videoWrapper: {
    textAlign: "center",
    position: "relative",
    ".video-banner": {
      maxWidth: ["100%", "100%", "100%", "100%", "100%", "80%", "80%"],
      borderRadius: "10px",
    },
  },
  playPause: {
    color: "white",
    fontWeight: 700,
    position: "absolute",
    padding: "0px",
    bottom: [40, 40, 40, 70, 100],
    left: "50%",
    transform: "translateX(-50%)",
    ":focus": {
      outline: 0,
    },
    img: {
      mr: "16px",
    },
  },
};
