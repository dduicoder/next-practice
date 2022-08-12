import Head from "next/head";

import Chart from "../components/UI/Chart";

const ChartPage = () => {
  const datas = [
    {
      x: 70,
      y: 40,
    },
    {
      x: 20,
      y: 50,
    },
    {
      x: 50,
      y: 10,
    },
    {
      x: 10,
      y: 70,
    },
  ];

  return (
    <>
      <Head>
        <title>Meetups - Chart</title>
        <meta name="description" content="Epic chart" />
      </Head>
      <Chart xTotal={100} yTotal={100} datas={datas} />
    </>
  );
};

export default ChartPage;
