import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/landingLayout";
import Banner from "components/second-banner";
import FOF from "sections/FOF";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout homeToggle>
        <SEO title="Coming soon" />
        <Banner title="Coming " accent="Soon" />
        <FOF />
      </Layout>
    </ThemeProvider>
  );
}
