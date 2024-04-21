import React from "react";

import styles from "./Banner.module.css";

const Banner = ({ data }) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data.poster_path})` }}>
      <div className={styles.textWrap}>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
