import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NUTMEG ToDo</title>
        <meta name="description" content="ToDoアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
