import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./form/input";
import Error from "./form/error";
import Bg from "assets/images/s_banner.png";
import { Box, Button, Container } from "theme-ui";
import Subscribe from "sections/subscribe";

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
            color: "red",
            textAlign: "center",
            marginBottom: "40px",
            marginTop: 0,
            paddingTop: "20px",
            fontSize: "13px",
            fontWeight: "semi-bold",
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
            email: Yup.string()
              .email("Invalid email")
              .required("This field is required."),
          })}
          onSubmit={async (
            { email },
            { setSubmitting, resetForm, setFieldValue }
          ) => {
            try {
              const data = JSON.stringify({
                email,
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
          {({}) => {
            return (
              <Form>
                <Subscribe></Subscribe>

                <Box sx={styles.buttonWrapper}>
                  <Button style={{ margin: "auto" }}>Submit</Button>
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
