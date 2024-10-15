import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./form/input";
import Error from "./form/error";
import Bg from "assets/images/s_banner.png";
import { Box, Button, Container, Text } from "theme-ui";
import Subscribe from "sections/subscribe";
import { borderRadius, margin } from "polished";
import Bg2 from "assets/images/rkhama_web.png";

const ContactForm = () => {
  return (
    <Box
      sx={styles.section}
      //   style={{

      //     "@media screen and (max-width:728px)": {

      //   backgroundImage: `url(${Bg2})`,
      // backgroundRepeat: `no-repeat`,
      // backgroundSize: "cover",
      // },
      //   }}
    >
      <Container sx={styles.container}>
        <Text sx={styles.title}>
          A WHOLE NEW VIRTUAL SHOPPING EXPERIENCE AWAITS. <br></br>
          LAUNCHING VERY SOON.
        </Text>

        <Formik
          initialValues={{
            email: "",
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
              const config = {
                "Content-Type": "application/json",
              };

              const response = await fetch(
                "https://api.formium.io/submit/5fd4e3d79f50150001bac31d",
                {
                  method: "POST",
                  body: data,
                  headers: config,
                }
              );

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
          {({ values, touched, errors }) => {
            return (
              <Form>
                <Text sx={styles.sub}>SUBSCRIBE NOW!</Text>
                <Text sx={styles.paragraph}>
                  SIGN UP TO BE FIRST IN LINE TO RECEIVE UPDATES,<br></br>{" "}
                  EXCLUSIVE PERKS & ACCESS TO MEMBERS ONLY CONTENT.
                </Text>

                <Box sx={styles.inputField}>
                  <Input
                    style={{
                      borderRadius: "0px",
                      height: "22px",
                      fontSize: "12px",
                    }}
                    id="email"
                    aria-label="email"
                    component="input"
                    as={FastField}
                    type="email"
                    name="email"
                    className="text__area"
                    placeholder="EMAIL ADDRESS*"
                    error={touched.email && errors.email}
                  />
                  <ErrorMessage component={Error} name="email" />
                  {values.success && (
                    <Box sx={styles.successMessage}>
                      <h4>
                        Your message has been successfully sent, We will get
                        back to you ASAP!
                      </h4>
                    </Box>
                  )}
                </Box>

                <Box sx={styles.buttonWrapper}>
                  <Button sx={styles.button}>Subscribe</Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    backgroundImage: `url(${Bg2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "@media screen and (max-width:728px)": {
      backgroundImage: `url(${Bg})`,
      backgroundRepeat: `no-repeat`,

      backgroundSize: "cover",
    },
  },

  container: {
    py: ["0px", "40px"],
    width: "100%",
  },
  title: {
    "@media screen and (max-width:728px)": {
      fontSize: "13px",
      color: "#EB1C24",
      pt: "14px",
    },

    fontSize: "20px",
    color: "#EB1C24",
    textAlign: "center",
    fontFamily: "Futura Pt,'sans-serif'",
    fontWeight: 600,
  },

  sub: {
    "@media screen and (max-width:728px)": {
      fontSize: "20px",
      color: "#909090",
    },
    mt: "35px",
    mb: "12px",
    fontSize: "30px",
    color: "#909090",
    textAlign: "center",
    fontFamily: "Futura Pt,'sans-serif'",
    fontWeight: 600,
  },

  paragraph: {
    "@media screen and (max-width:728px)": {
      fontSize: "12px",
      color: "black",
    },
    mb: "10px",
    fontSize: "18px",
    color: "black",
    textAlign: "center",
    fontFamily: "Futura Pt,'sans-serif'",
    fontWeight: 600,
  },
  successMessage: {
    "@media screen and (max-width:728px)": {
      fontSize: "12px",
      color: "success",
    },
    mb: "10px",
    fontSize: "18px",
    color: "success",
    textAlign: "center",
    fontFamily: "Futura Pt,'sans-serif'",
    fontWeight: 600,
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

    ".text__area": {
      "@media screen and (max-width:728px)": {
        width: "255px",
      },
      borderRadius: "0px",
      fontSize: "12px",

      backgroundColor: "white",
      margin: "auto",
      width: "400px",
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
        fontSize: "9px",
        fontWeight: 700,
      },
      "&:focus": {
        "&:focus": {
          borderColor: "black",
          // boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
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
      mx: "auto",
      fontFamily: "Futura Pt,'sans-serif'",
      "&:hover": {
        color: "#EB1C24",
      },
      minHeight: "0px",
      pb: "35px",
      boxShadow: "none",
      backgroundColor: "transparent",
      backgroundImage: "none",
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
