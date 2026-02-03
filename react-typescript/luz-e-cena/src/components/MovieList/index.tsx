import styles from './MovieList.module.css'
import CardMovie from '../CardMovie'
import type { ICardMovieProps } from '../../types'

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

