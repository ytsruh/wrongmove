import Head from "next/head";

// components
import HomeContent from '../components/HomeContent'

import wrongmoveSmallLogo from '../assets/wrongmoveSmallLogo.png'

export default function Home() {
  return (
      <>
        <Head>
          <title>Homepage | Wrongmove</title>
          <meta name="description" content="Wrongmove homepage. The Righmove clone." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeContent />
      </>
  );
}