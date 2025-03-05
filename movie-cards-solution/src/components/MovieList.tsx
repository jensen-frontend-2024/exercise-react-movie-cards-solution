import { ReactElement, useContext } from 'react';
import { MovieCard } from './MovieCard';
import { MovieContext } from '../context/MovieContextProvider';

export function MovieList(): ReactElement {
  const { movies } = useContext(MovieContext);

  if (movies.length === 0) {
    return <section className="movie-list">No movies...</section>;
  }

  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard movie={m} key={m.id} />
      ))}
    </section>
  );
}
