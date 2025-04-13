import { createMovie } from '@/app/actions';

export default function CreateMoviePage() {
  return (
    <div>
      <h1>Create New Movie</h1>
      <form action={createMovie}>
        <div>
          <label>ID</label>
          <input name="id" />
        </div>
        <div>
          <label>Movie Name</label>
          <input name="movie_name" />
        </div>
        <div>
          <label>Movie Year</label>
          <input name="movie_year" />
        </div>
        <div>
          <label>Genre</label>
          <input name="movie_genre" />
        </div>
        <div>
          <label>Director</label>
          <input name="movie_director" />
        </div>
        <div>
          <label>Comments</label>
          <textarea name="user_comments" />
        </div>
        <div>
          <label>Rating (1–5)</label>
          <input name="movie_rating" type="number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
