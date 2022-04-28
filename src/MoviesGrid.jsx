import { MoviesCard } from "./MovieCard"
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"

export function MoviesGrid(){
    return (
        <ul class={styles.movieGrid}>
            {movies.map(movie=>{
                return <MoviesCard key={movie.id} movie={movie} />
            })}
        </ul>
    )
}