import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../components/globalStyle";

class Origamium extends App {
    public static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }
        return { pageProps };
    }

    public render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Head>
                    <title>Origamium</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <GlobalStyle />
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default Origamium;
