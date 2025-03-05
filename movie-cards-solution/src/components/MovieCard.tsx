import { ReactElement, useContext } from 'react';
import { IMovie, MovieContext } from '../context/MovieContextProvider';

interface IMovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: IMovieCardProps): ReactElement {
  const { deleteMovie } = useContext(MovieContext);

  return (
    <article className="movie-card" onClick={() => deleteMovie(movie.id)}>
      <div className="title-row">
        <span className="title">{movie.title}</span>
        <span className="rating">{movie.rating}/5</span>
      </div>
      <div className="genre-row">
        <span className="genre">{movie.genre}</span>
      </div>
      <p className="description">{movie.description}</p>
    </article>
  );
}
