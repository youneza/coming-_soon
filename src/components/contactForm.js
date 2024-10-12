import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./form/input";
import Error from "./form/error";
import Bg from "assets/images/s_banner.png";
import { Box, Button, Container, Text } from "theme-ui";
import SectionHeading from "./section-heading";
import { backgroundImages, borderColor, margin } from "polished";
import Subscribe from "sections/subscribe";





const ContactForm = () => {
  return (
    <section style={{backgroundImage: `url(${Bg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',}} 
> 

    <Container sx={styles.container}>
      <h1 style={{color:'red',textAlign:'center',marginBottom:'100px'}}>A WHOLE NEW VIRTUAL SHOPPING EXPERIENCE AWAITS. <br></br>
      LAUNCHING VERY SOON.</h1>
      {/* <Text sx={styles.container.text}>
        Do you have a question, concern, idea, feedback, or problem? please fill
        out the form below and we'd be happy to help!
      </Text> */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          forProfit: "",
          message: "",
          subject: "",
          phone: "",
          success: false,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("This field is required."),
          forProfit: Yup.string().required("This field is required."),
          phone: Yup.string().required("This field is required."),
          subject: Yup.string().required("This field is required."),
          email: Yup.string()
            .email("Invalid email")
            .required("This field is required."),
          message: Yup.string().required("This field is required."),
        })}
        onSubmit={async (
          { name, forProfit, email, subject, message, phone },
          { setSubmitting, resetForm, setFieldValue }
        ) => {
          try {
            const data = JSON.stringify({
              name,
              email,
              forProfit,
              subject,
              message,
              phone,
            });
            console.log("data", subject);
            const config = {
              "Content-Type": "application/json",
            };

            const response = await fetch(
              "https://api.formium.io/submit/5fd4e3d79f50150001bac31d/africadev",
              {
                method: "POST",
                body: data,
                headers: config,
              }
            );
            console.log("rr", response);

            setSubmitting(false);
            setFieldValue("success", true);
            setTimeout(() => resetForm(), 1000);
          } catch (err) {
            setSubmitting(false);
            setFieldValue("success", false);
            alert(`Something went wrong, please try again ${err}`); // eslint-disable-line
          }
        }}
      >
        {({ values, touched, errors, setFieldValue, isSubmitting }) => {
          console.log("er", errors);

          return (
            // <Form>
            //  <h1 style={{color:"#909090",textAlign:'center'}}>Subscribe Now</h1>
            //  <p style={{color:"black",textAlign:'center',fontWeight:'bold'}}> SIGN UP TO BE FIRST IN LINE TO RECEIVE UPDATES,EXCLUSIVE PERKS & ACCESS TO MEMBERS ONLY CONTENT</p>
            //   <Box sx={styles.inputField}>
            //     <Input
                
            //       id="email"
            //       aria-label="email"
            //       component="input"
            //       as={FastField}
            //       type="email"
            //       name="email"
            //       placeholder="Email*"
            //       error={touched.email && errors.email}
            //     />
            //     <ErrorMessage component={Error} name="email" />
            //   </Box>

              

             
            //   <Box sx={styles.buttonWrapper}>
            //     <Button style={{margin:'auto'}}>Submit</Button>
            //   </Box>
            // </Form>

            <Subscribe></Subscribe>
          );
        }}
      </Formik>
    </Container>

    </section>

  );
};

const styles = {
  container: {
    
    py: ["0px", "40px"],
    width:"100%",
    text: {
      width: ["100%", "95%", "80%", "60%"],
      mx: "auto",
      fontWeight: 500,
      textAlign: "center",
      colo: "",
      mb: 5,
    },
  },
  
  inputField: {
    color:"black",
    borderColor:"black",
    position: "relative",
    marginBottom: "1rem",
    backgroundColor: "",
    ".error": {
      borderColor: "  #ff4136 !important",
      borderWidth: "  1px !important",
    },
    ".text__area ": {
      backgroundColor: "darkRed",
    },

    ".text__area": {
      width: " 100%",
      boxSizing: "border-box",
      border: "2px solid ",
      borderColor: "black",
      padding: " 0.8rem 1rem",
      borderRadius: "7px",
      marginBottom: "0.5rem",
      transition: "0.3s",
      outlineColor: "black",
      "&:focus": {
        borderColor: "black",
        boxShadow: "0 0 0 2px primary",
        outline: "none",
      },
      "&::placeholder": {
        color: "black",
      },
      "&:focus": {
        "&:focus": {
          borderColor: "black",
          boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
          outline: "none",
        },
      },
      "&:placeholder-shown": {
        fontSize: 2,
      },
    },
  },
  buttonWrapper: {
    "@media screen and (max-width: 640px)": {
      textAlign: "center",
    },
    button: {
      mt: 0,
      display: "block",
      textDecoration: "none",
      color: "white",
      fontSize: ["16px", null, null, 2],
      letterSpacings: "-0.15px",
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      "@media screen and (max-width: 640px)": {
        width: "80%",
        mx: "auto",
      },
    },
  },
};

export default ContactForm;
