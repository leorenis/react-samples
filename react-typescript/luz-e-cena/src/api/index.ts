import axios from 'axios'
import type { ICardMovieProps } from '../types'

const BASE_URL = `http://localhost:3001`

export const fetchMovies = async (): Promise<ICardMovieProps[]> => {
  const fullurl = `${BASE_URL}/movies`
  const response = await axios.get<ICardMovieProps[]>(fullurl)
  return response.data
}
