import "../styles/index.css";
import "../styles/layout.css"
import "../styles/components.css"
import "../styles/form.css"
import '../styles/input.css'
import "../styles/button.css"

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp;
