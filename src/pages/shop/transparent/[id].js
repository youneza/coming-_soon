import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Shop from "sections/shop";
import { useRouter } from "next/router";
import Layout from "components/layout";

export default function page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Shop" />
        <Shop query="transparent" subCategory={id} />
      </Layout>
    </ThemeProvider>
  );
}
