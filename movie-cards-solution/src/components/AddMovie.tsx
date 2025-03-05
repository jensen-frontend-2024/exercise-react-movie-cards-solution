import { FormEventHandler, ReactElement, useContext, useRef } from 'react';
import { IMovie, MovieContext } from '../context/MovieContextProvider';
import { v4 as uuidv4 } from 'uuid';

export function AddMovie(): ReactElement {
  const titleRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const { addMovie } = useContext(MovieContext);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newMovie: IMovie = {
      id: uuidv4(),
      title: titleRef.current?.value || 'No Title',
      rating: ratingRef.current?.value || '3',
      genre: genreRef.current?.value || 'No Genre',
      description: descRef.current?.value || 'Lorem Ipsum...',
    };

    addMovie(newMovie);
  };

  return (
    <form className="add-movie" onSubmit={handleOnSubmit}>
      <section className="left-pane">
        <label htmlFor="title">Title</label>
        <label htmlFor="rating">Rating</label>
        <label htmlFor="genre">Genre</label>
        <label htmlFor="description">Description</label>
      </section>
      <section className="right-pane">
        <input ref={titleRef} type="text" id="title" />
        <div className="rating-wrapper">
          <span>1</span>
          <input ref={ratingRef} type="range" id="rating" min={1} max={5} />
          <span>5</span>
        </div>
        <select ref={genreRef} id="genre">
          <option>Drama</option>
          <option>Comedy</option>
        </select>
        <textarea ref={descRef} id="description"></textarea>
        <div className="action-buttons">
          <button type="reset">Clear</button>
          <button type="submit">Add</button>
        </div>
      </section>
    </form>
  );
}
