import { MovieCard } from "./MovieCard";
import styles from "../components/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  /* 
  const moviesState = useState([]);
  const [movies, setMovies] = moviesState  o directamente lo de arriba que es lo q mas se usa*/

  /* const movies = moviesState[0] esto es lo mismo que lo de arriba
  const setMovies = mmoviesState[1] */

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
