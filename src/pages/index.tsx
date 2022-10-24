import Header from "@/components/header";
import experiences from "@/data/experiences.json";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  console.log(experiences);
  return (
    <div className="w-full leading-relaxed antialiased">
      <Head>
        <title>Doğucan Şaşıoğlu</title>
        <meta name="description" content="Doğucan Şaşıoğlu Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mt-96 p-4 lg:mx-auto lg:max-w-screen-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          porro suscipit laborum, odio culpa earum numquam dicta eaque! Quasi
          voluptates itaque nostrum aliquam. Provident quae sapiente natus
          facere adipisci quos.
        </p>
      </main>
      <main className="mt-96 p-4 lg:mx-auto lg:max-w-screen-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          porro suscipit laborum, odio culpa earum numquam dicta eaque! Quasi
          voluptates itaque nostrum aliquam. Provident quae sapiente natus
          facere adipisci quos.
        </p>
      </main>
      <main className="mt-96 p-4 lg:mx-auto lg:max-w-screen-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          porro suscipit laborum, odio culpa earum numquam dicta eaque! Quasi
          voluptates itaque nostrum aliquam. Provident quae sapiente natus
          facere adipisci quos.
        </p>
      </main>
      <main className="mt-96 p-4 lg:mx-auto lg:max-w-screen-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          porro suscipit laborum, odio culpa earum numquam dicta eaque! Quasi
          voluptates itaque nostrum aliquam. Provident quae sapiente natus
          facere adipisci quos.
        </p>
      </main>
      <main className="mt-96 p-4 lg:mx-auto lg:max-w-screen-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          porro suscipit laborum, odio culpa earum numquam dicta eaque! Quasi
          voluptates itaque nostrum aliquam. Provident quae sapiente natus
          facere adipisci quos.
        </p>
      </main>
    </div>
  );
};

export default Home;
