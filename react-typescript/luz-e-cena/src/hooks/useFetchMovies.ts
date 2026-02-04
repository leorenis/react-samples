import { useEffect, useState } from 'react';
import type { ICardMovieProps } from '../types';
import { fetchMovies } from '../api';

const useFetchMovies = (): [ICardMovieProps[], boolean, string | null] => {
  const [movies, setMovies] = useState<ICardMovieProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleFetchMovies = async () => {
    setIsLoading(true)
    try {
      const movies = await fetchMovies();
      setMovies(movies)
    } catch (err) {
      setIsLoading(false)
      setError('Error to fetch movies. Please, try again.')
      console.log(`Error: fetch /movies`, err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleFetchMovies()
  }, [])

  return [ movies, isLoading, error ]
}

export default useFetchMovies
