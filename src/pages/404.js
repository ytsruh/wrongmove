import React from "react";
import Image from "next/image";
import cat from "../assets/404.jpeg";

export default function Custom404() {
  return (
    <div className="text-center m-3">
      <h2 style={styles.heading}>
        <span style={styles.span}> 404</span> : Not Found
      </h2>
      <h5 style={styles.text}>We can&apos;t find the page you&apos;re looking for</h5>
      <Image
        src={cat.src}
        style={styles.img}
        alt="Angry cat that is mad because user can't seem to direct itself."
      />
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
