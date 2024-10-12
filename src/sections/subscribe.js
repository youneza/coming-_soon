/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { borderColor, rgba } from "polished";
import SectionHeading from "components/section-heading";
import SubscriptionForm from "components/subscription-form";

const Subscribe = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
       
        <h1 style={{color:"#909090",textAlign:"center",fontSize:"30px"}}>SUBSCRIBE NOW!</h1>
        <p style={{color:"black",textAlign:"center"}}>SIGN UP TO BE FIRST IN LINE TO RECEIVE UPDATES, <br></br> EXCLUSIVE PERKS & ACCESS TO MEMBERS ONLY CONTENT.</p>
        <SubscriptionForm sx={styles.subscriptionForm} />
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    // backgroundColor: rgba("#9cd7f9", 0.5),
    // backgroundColor: rgba("", 1),
   

    // py: "40px",
    // pt: [9, null, null, null, 10, 13],
    // pb: [9, null, null, null, 11, 14],
  },
  heading: {
    mb: [7, null, null, 8, 9, 10],
    h3: {
      // color: "white",
      fontSize: [6, null, null, 10],
    },
    p: {
      color: "black",
      fontSize: [2],
     
    },
  },
  subscriptionForm: {
   
   
    flexDirection: ["column", null, null, "row"],
    input: {
      borderColor:"black",
      border: "4 solid",
      color: "black",
      outlineColor: "black",
      fontFamily: "body",
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: "0px 16px 40px rgba(72, 59, 26, 0.08)",
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("#343D48", 0.7),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      ml: [0, null, null, 3],
      mt: [4, null, null, 0],
    },
  },
};
