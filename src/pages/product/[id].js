import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Product from "sections/product";
import { useRouter } from "next/router";

export default function page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Frontal Slayer" />
        <Product query={id} />
      </Layout>
    </ThemeProvider>
  );
}
