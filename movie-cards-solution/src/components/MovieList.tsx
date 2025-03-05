import { ReactElement } from 'react';
import { MovieCard } from './MovieCard';

export function MovieList(): ReactElement {
  return (
    <section className="movie-list">
      <MovieCard
        description="Ipsum magna sint quis sunt dolore anim velit nisi cillum. Nulla et reprehenderit mollit dolor sit elit ut ut eu. Ut aute voluptate tempor qui commodo."
        genre="Drama"
        rating="4"
        title="Lorem Ipsum"
      />
    </section>
  );
}
