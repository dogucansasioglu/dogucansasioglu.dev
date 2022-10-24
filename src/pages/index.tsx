import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Doğucan Şaşıoğlu</title>
        <meta name="description" content="Doğucan Şaşıoğlu Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-green-500">Doğucan Şaşıoğlu</h1>
      </main>
    </div>
  );
};

export default Home;
