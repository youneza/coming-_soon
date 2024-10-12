import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/landingLayout";
import Banner from "components/second-banner";
import Faq from "sections/faq";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="FAQ" />
        <Banner title="Frequently Asked " accent="Questions" />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
