import { MovieCard } from "./MovieCard";
import styles from "../components/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";


export function MoviesGrid() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  /* const location = useLocation();
  console.log(location.search) */

  const query = useQuery()
  const search = query.get('search')
  console.log(search) 

  useEffect(() => {
    setisLoading(true)
    const searchUrl  = search ? `/search/movie?query=${search}`: "/discover/movie"
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setisLoading(false)
    });
  }, [search]);
  if(isLoading){
    return <Spinner/>
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
