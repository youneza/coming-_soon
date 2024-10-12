import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/landingLayout";
import Products from "sections/products";

export default function IndexPage() {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
      document.body.style.height = `${window.innerHeight}px`;
      setHeight(`${window.innerHeight}px`);
    };
    console.log("innerHeight", height);
    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout homeToggle noLogo>
        <SEO title="Products" />
        <Products />
      </Layout>
    </ThemeProvider>
  );
}
