import Head from "next/head";
import Image from 'next/image'

import wrongmoveSmallLogo from '../assets/wrongmoveSmallLogo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage | Wrongmove</title>
        <meta name="description" content="Wrongmove homepage. The Righmove clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={styles.div}>
        <div className="comingSoonLogoDiv">
          <h1>wrongmove</h1>
          <Image src={wrongmoveSmallLogo} alt='wrongmove small logo'/>
        </div>
        <h2 style={styles.h2}>Coming Soon</h2>
      </div>
    </div>
  );
}

const styles = {
  div: {
    height: "100vh",
    textAlign: "center",
    marginTop: "50px",
  },
  h1: {
    color: "#00DEB6",
    fontSize: "50px",
  },
  h2: {
    color: "#262637",
    fontSize: "20px",
  },
};
