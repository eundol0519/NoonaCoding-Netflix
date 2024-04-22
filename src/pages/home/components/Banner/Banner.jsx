import React from "react";

import styles from "./Banner.module.css";
import { posterUrl } from "../../../../constants/img";

const Banner = ({ data }) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${posterUrl}${data.poster_path})` }}>
      <div className={styles.textWrap}>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
