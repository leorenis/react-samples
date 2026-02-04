import { useEffect, useState } from 'react'
import type { ICardMovieProps } from '../types'

type FilterMoviesHook = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  ICardMovieProps[],
  () => void
]

const useFilterMovies = (movies: ICardMovieProps[]): FilterMoviesHook => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredMovies, setFilteredMovies] = useState<ICardMovieProps[]>([])

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  const handleSearch = () => {
    const filtered = movies.filter((it: ICardMovieProps) =>
      it.titulo.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredMovies(filtered)
  }

  return [searchTerm, setSearchTerm, filteredMovies, handleSearch]
}
export default useFilterMovies
