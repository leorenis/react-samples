import styles from './MovieList.module.css'
import CardMovie, { type ICardMovieProps } from '../CardMovie'

export interface IMovieListProps {
  movies: ICardMovieProps[]
}

const MovieList = ({ movies }: IMovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie: ICardMovieProps) =>
        <CardMovie key={movie.id} {...movie } />
      )}
    </ul>
  )
}

export default MovieList
