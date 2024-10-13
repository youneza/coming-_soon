import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/landingLayout";
import Banner from "components/second-banner";
import ContactForm from "components/contactForm";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Contact" />
      <Banner title="Get in touch  " accent="with us" />
      <ContactForm />
    </ThemeProvider>
  );
}
