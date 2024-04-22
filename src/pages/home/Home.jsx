import React from "react";

import Banner from "./components/banner/Banner";
import MovieSlide from "../../components/movieSlide/MovieSlide";

import { useMoviesQuery } from "../../hooks/useMovies";

import { Alert, Spinner } from "react-bootstrap";

const Home = () => {
  const { data, isLoading, isError, error } = useMoviesQuery("popular");

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <Banner data={data[0]} />
      <MovieSlide type="popular" title="Popular" />
      <MovieSlide type="top_rated" title="Top Rated" />
      <MovieSlide type="upcoming" title="Upcoming" />
    </div>
  );
};

export default Home;
