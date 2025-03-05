import { FormEventHandler, ReactElement, useRef } from 'react';

export function AddMovie(): ReactElement {
  const titleRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = {
      title: titleRef.current?.value,
      rating: ratingRef.current?.value,
      genre: genreRef.current?.value,
      description: descRef.current?.value,
    };

    console.log(formData);
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
