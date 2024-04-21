import React from "react";

import Banner from "./components/Banner/Banner";

import { usePopularMoviesQuery } from "../../hooks/usePopularMovies";

import { Alert, Spinner } from "react-bootstrap";

import styles from "./Home.module.css";

const Home = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <Banner data={data[0]} />
    </div>
  );
};

export default Home;
