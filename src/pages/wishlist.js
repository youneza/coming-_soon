import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";

import Wishlist from "sections/wishlist";
import Layout from "components/layout";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Your Wishlist" />
        <Wishlist />
      </Layout>
    </ThemeProvider>
  );
}
