import React from "react";

export default function ComingSoon() {
  return (
    <div className="text-center m-3">
      <h2 style={styles.heading}>
        <span style={styles.span}> Feature</span> Coming Soon
      </h2>
      <h5 style={styles.text}>
        We're still building Wrongmove so not everything is available yet. Please check back soon and
        hopefully this feature will be ready.
      </h5>
    </div>
  );
}

const styles = {
  text: {
    fontSize: "1.5rem",
    padding: "0px 20px 0px 20px",
  },
  heading: {
    fontSize: "4rem",
    margin: "1.2rem",
    color: "#262637",
  },
  span: {
    color: "#65dbb8",
  },
};
