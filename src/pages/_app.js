import "../styles/index.css";
import "../styles/layout.css";
import "../styles/form.css";
import "../styles/input.css";
import "../styles/button.css";
import "../styles/nav.css";
import "../styles/agentDashboard.css";
import "../styles/agentNav.css";
import "../styles/agentStats.css";
import "../styles/agentCard.css";
import "../styles/home.css";
import "../styles/card.css";
import "../styles/footer.css";
import "../styles/mobile.css";
import "../styles/images.css";
import "../styles/publicListings.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
