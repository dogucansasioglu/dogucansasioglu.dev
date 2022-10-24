import experiences from "@/data/experiences.json";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  console.log(experiences);
  return (
    <div className="w-full leading-relaxed text-dark-purple antialiased">
      <Head>
        <title>Doğucan Şaşıoğlu</title>
        <meta name="description" content="Doğucan Şaşıoğlu Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-recoleta text-2xl font-bold">Doğucan Şaşıoğlu</h1>
        <h3 className="font-recoleta text-xl">Doğucan Şaşıoğlu</h3>
        <p className="font-averta">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          porro suscipit laborum, odio culpa earum numquam dicta eaque! Quasi
          voluptates itaque nostrum aliquam. Provident quae sapiente natus
          facere adipisci quos.
        </p>
        <p className="font-averta font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          porro suscipit laborum, odio culpa earum numquam dicta eaque! Quasi
          voluptates itaque nostrum aliquam. Provident quae sapiente natus
          facere adipisci quos.
        </p>
        <p className="font-averta font-bold">
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
