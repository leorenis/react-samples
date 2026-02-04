import { FaSearch } from 'react-icons/fa'
import Button from '../Button'
import Fieldset from '../Fieldset'
import InputText from '../InputText'
import styles from './MovieSection.module.css'
import MovieList from '../MovieList'
import type { ICardMovieProps } from '../../types'
import { useEffect, useState } from 'react'
import { fetchMovies } from '../../api'

const MovieSection = () => {
  const [movies, setMovies] = useState<ICardMovieProps[]>([])

  const handleFetchMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies)
    } catch (err) {
      console.log(`Error: fetch /movies`, err)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleFetchMovies()
  }, [])

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText placeholder='Buscar filmes...' />
          <Button variant='icon'>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  )
}

export default MovieSection
