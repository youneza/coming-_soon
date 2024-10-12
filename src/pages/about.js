import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/landingLayout";
import Banner from "components/second-banner";
import WhyUs from "sections/why-us";
import IntroVideo from "sections/tutorial-video";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout spaceLeft>
        <SEO title="Why us" />
        <Banner title="WHAT SETS US " accent="APART" />
        <WhyUs />
        <IntroVideo />
      </Layout>
    </ThemeProvider>
  );
}
