import dynamic from "next/dynamic";
import Head from "next/head";

const Landing = dynamic(() => import("../components/home"), { ssr: false });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>NextJs Web3 Starter Kit</title>
          <meta name="description" content="NextJs Web3 Starter Kit" />
        </Head>
        <Landing />
      </div>
    </>
  );
}
