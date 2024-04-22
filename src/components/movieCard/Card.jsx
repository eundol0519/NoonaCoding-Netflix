import React from "react";
import { posterUrl } from "../../constants/img";
import styles from "./Card.module.css";
import { Badge } from "react-bootstrap";

const Card = ({ movie }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${posterUrl}${movie.poster_path})`,
      }}
    >
      <div className={styles.overlay}>
        <h3>{movie.title}</h3>
        <div>
          {movie.genre_ids.map((id) => {
            return (
              <React.Fragment key={id}>
                <Badge bg="danger">{id}</Badge>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <p>{movie.vote_average}</p>
          <p>{movie.popularity}</p>
          <p>{movie.adult ? "over18" : "under18"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
