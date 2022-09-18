import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage | Wrongmove</title>
        <meta name="description" content="Wrongmove homepage. The Righmove clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={styles.div}>
        <h1 style={styles.h1}>Wrongmove</h1>
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
