import Head from "next/head";

import Slider from "../components/UI/Slider";

const SliderPage = () => {
  const imgs = [
    "https://www.golfchannel.com/sites/default/files/2022/05/27/Ball_1920_generic_green.png",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://www.testim.io/wp-content/uploads/2019/11/Testim-What-is-a-Test-Environment_-A-Guide-to-Managing-Your-Testing-A.png",
    "https://esportenewsmundo.com.br/wp-content/uploads/2022/06/Golden-State-Warriors-Campeao-NBA-1024x576.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg",
  ];

  return (
    <>
      <Head>
        <title>Meetups - Slider</title>
        <meta name="description" content="Epic slider" />
      </Head>
      <Slider imgs={imgs} />
    </>
  );
};

export default SliderPage;
