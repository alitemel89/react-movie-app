import React from "react";
// API
import API from "../API";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
    </>
  );
};

export default Home;
