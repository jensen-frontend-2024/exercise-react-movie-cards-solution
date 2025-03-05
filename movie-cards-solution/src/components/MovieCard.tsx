import { ReactElement } from 'react';

interface IMovieCardProps {
  title: string;
  rating: string;
  genre: string;
  description: string;
}

export function MovieCard({ title, rating, genre, description }: IMovieCardProps): ReactElement {
  return (
    <article className="movie-card">
      <div className="title-row">
        <span className="title">{title}</span>
        <span className="rating">{rating}/5</span>
      </div>
      <div className="genre-row">
        <span className="genre">{genre}</span>
      </div>
      <p className="description">{description}</p>
    </article>
  );
}
