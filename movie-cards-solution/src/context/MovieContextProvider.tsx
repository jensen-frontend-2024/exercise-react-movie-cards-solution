import { createContext, ReactElement, ReactNode, useState } from 'react';

export interface IMovie {
  id: string;
  title: string;
  rating: string;
  genre: string;
  description: string;
}

interface IMovieContext {
  addMovie: (newMovie: IMovie) => void;
  deleteMovie: (movieId: string) => void;
  movies: IMovie[];
}

interface IMovieContextProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext({} as IMovieContext);

export function MovieContextProvider({ children }: IMovieContextProviderProps): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const addMovie = (newMovie: IMovie) => {
    const updatedMovies = [newMovie, ...movies];
    setMovies(updatedMovies);
  };

  const deleteMovie = (movieId: string) => {
    const updatedMovies = movies.filter((m) => m.id !== movieId);
    setMovies(updatedMovies);
  };

  const values: IMovieContext = {
    addMovie,
    deleteMovie,
    movies,
  };

  return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>;
}
