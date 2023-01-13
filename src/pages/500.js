import React from "react";
import cat from "../assets/500.jpeg";

export default function Custom500() {
  return (
    <div className="text-center m-3">
      <h2 style={styles.heading}>
        <span style={styles.span}> 500</span> : Error
      </h2>
      <h5 style={styles.text}>Something went wrong & we don't know why. Please don't try again.</h5>
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
