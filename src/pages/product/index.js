import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Product from "sections/product";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Frontal Slayer" />
      <Product />
    </ThemeProvider>
  );
}
