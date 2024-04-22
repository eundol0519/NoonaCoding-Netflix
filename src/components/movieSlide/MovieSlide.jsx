import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../movieCard/Card";
import styles from "./MovieSlide.module.css";
import { useMoviesQuery } from "../../hooks/useMovies";
import { responsive } from "../../constants/responsive";

const MovieSlide = ({ type, title }) => {
  const { data, isLoading, isError, error } = useMoviesQuery(type);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className={styles.container}>
      <h3>{title} Movies</h3>
      <Carousel infinite={true} centerMode={true} itemClass="movie-slide p-1" containerClass={styles.carouselContainer} responsive={responsive}>
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <Card movie={item} />
            </React.Fragment>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
