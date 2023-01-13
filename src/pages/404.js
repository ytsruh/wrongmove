import React from "react";
import cat from "../assets/404.jpeg";

export default function Custom404() {
  return (
    <div className="text-center m-3">
      <h2 style={styles.heading}>
        <span style={styles.span}> 404</span> : Not Found
      </h2>
      <h5 style={styles.text}>We can't find the page you're looking for</h5>
      <img src={cat.src} style={styles.img} />
    </div>
  );
}

const styles = {
  text: {
    fontSize: "2rem",
  },
  heading: {
    fontSize: "4rem",
    margin: "1.2rem",
    color: "#262637",
  },
  span: {
    color: "#65dbb8",
  },
  img: {
    width: "70%",
    marginTop: "15px",
  },
};
