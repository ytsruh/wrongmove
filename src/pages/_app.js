import "../styles/index.css";
import "../styles/layout.css"
import "../styles/form.css"
import '../styles/input.css'
import "../styles/button.css"
import "../styles/nav.css"

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp;
