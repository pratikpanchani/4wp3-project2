import { revalidatePath } from 'next/cache';

export default function CreateMoviePage() {
  async function createMovie(formData) {
    'use server';

    const newMovie = {
      id: formData.get('id'),
      movie_name: formData.get('movie_name'),
      movie_year: formData.get('movie_year'),
      movie_genre: formData.get('movie_genre'),
      movie_director: formData.get('movie_director'),
      user_comments: formData.get('user_comments'),
      movie_rating: Number(formData.get('movie_rating')),
    };

    await fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie),
    });

    revalidatePath('/collection');
    revalidatePath('/admin');
  }

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
