import Head from "next/head";
import Image from "../static/icon.png";

function page1() {
  return (
    <div>
      <img src={Image} />
      <p>This is Page1 Componenet</p>
      너와 함께 날아가 &nbsp; you you are my universe
      <Head>
        <title>페이지1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
      <style jsx>{`
        p {
          color: blue;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}

export default page1;
