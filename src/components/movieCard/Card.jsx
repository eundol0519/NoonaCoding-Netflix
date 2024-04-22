import React from "react";
import { posterUrl } from "../../constants/img";
import styles from "./Card.module.css";
import { Alert, Badge, Spinner } from "react-bootstrap";
import { useMovieGenresQuery } from "../../hooks/useMovieGenres";

const Card = ({ movie }) => {
  const { data: genreData, isLoading, isError, error } = useMovieGenresQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

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
                <Badge bg="danger">{genreData[id]?.name}</Badge>
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
