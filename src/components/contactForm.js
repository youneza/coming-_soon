import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./form/input";
import Error from "./form/error";
import Bg from "assets/images/s_banner.png";
import { Box, Button, Container } from "theme-ui";
import Subscribe from "sections/subscribe";
import { borderRadius, margin } from "polished";

const ContactForm = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container sx={styles.container}>
        <h1
          style={{
            color: "#EB1C24",
            textAlign: "center",
            marginBottom: "40px",
            marginTop: 0,
            paddingTop: "20px",
            fontSize: "13px",
            fontWeight:600,
          }}
        >
          A WHOLE NEW VIRTUAL SHOPPING EXPERIENCE AWAITS. <br></br>
          LAUNCHING VERY SOON.
        </h1>

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
            <Form>
             <h2 style={{textAlign:"center", fontSize:"20px",color:"#909090",fontWeight:600}}>SUBSCRIBE NOW!</h2>
             <p style={{textAlign:"center",fontSize:"12px",fontWeight:600,color:"black"}}>SIGN UP TO BE FIRST IN LINE TO RECEIVE UPDATES, EXCLUSIVE PERKS & ACCESS TO MEMBERS ONLY CONTENT.</p>
              
              <Box sx={styles.inputField}>
                <Input
                style={{backgroundColor:"white",borderRadius:"0px",with:"255px",height:"22px"}}
                  id="email"
                  aria-label="email"
                  component="input"
                  as={FastField}
                  type="email"
                  name="email"
                  className="text__area"
                  placeholder="EMAIL ADSRESS*"
                  error={touched.email && errors.email}
                />
                <ErrorMessage component={Error} name="email" />
              </Box>

              

              
              <Box sx={styles.buttonWrapper}>
                <Button sx={styles.button}>SIGN UP</Button>
              </Box>
            </Form>
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
    width: "100%",
    
  },

  inputField: {
    color: "black",
    borderColor: "black",
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
      margin:"auto",
      width: "255px",
      boxSizing: "border-box",
      border: "2px solid ",
      borderColor: "black",
      padding: "10px 6px 14px 6px",
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
        color: "#909090",
        fontSize:"9px",
        fontWeight:700,

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
      "&:hover": {
         color:"#EB1C24"
        },
      minHeight:"0px",
      pb:"10px",
      boxShadow:"none",
      backgroundColor:"transparent",
      backgroundImage:"none",
      mt: 0,
      display: "block",
      textDecoration: "none",
      color: "#EB1C24",
      fontSize: ["10px", null, null, 2],
      letterSpacings: "-0.15px",
      lineHeight: 1.2,
      fontWeight: 600,
      letterSpacings: "-0.15px",
      // padding: ["12px 20px", null, "15px 30px"],
      "@media screen and (max-width: 640px)": {
        width: "80%",
        mx: "auto",
      },
    },
  },
};

export default ContactForm;
