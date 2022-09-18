import Head from "next/head";
import Image from 'next/image'

// components
import Nav from '../components/Nav'

import wrongmoveSmallLogo from '../assets/wrongmoveSmallLogo.png'

export default function Home() {
  return (
      <div>
        <Head>
          <title>Homepage | Wrongmove</title>
          <meta name="description" content="Wrongmove homepage. The Righmove clone." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
  );
}