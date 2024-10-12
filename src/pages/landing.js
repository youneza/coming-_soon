import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/landingLayout";
import Landing from "sections/landing";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout homeToggle>
        <SEO title="Frontal Slayer" />
        <Landing />
      </Layout>
    </ThemeProvider>
  );
}
