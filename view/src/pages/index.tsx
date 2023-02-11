import Head from "next/head";

import { Button } from "@/components/common";

export default function Home() {
  return (
    <>
      <Head>
        <title>NUTMEG ToDo</title>
        <meta name="description" content="ToDoアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-orange-400">
        <div className="w-full bg-slate-800 text-white h-16 flex justify-center items-center shadow-lg">
          <h1 className="text-2xl font-bold">NUTMEG ToDo</h1>
        </div>
        <Button>TEST</Button>
      </main>
    </>
  );
}
