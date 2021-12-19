import "semantic-ui-css/semantic.min.css";
import { Container, Divider } from "semantic-ui-react";
import MenuComponent from "../components/menu";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Container>
        <MenuComponent />
        <Component {...pageProps} />
      </Container>
    </React.Fragment>
  );
}
