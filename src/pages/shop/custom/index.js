import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Shop from "sections/shop";
import Layout from "components/layout";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Shop" />
        <Shop query={"custom"} />
      </Layout>
    </ThemeProvider>
  );
}
