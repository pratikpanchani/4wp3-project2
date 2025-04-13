import { getMovie, updateMovie } from '@/app/actions';
import Link from 'next/link';

export default async function EditMoviePage({ params }) {
  const movie = await getMovie(params.id);

  async function handleUpdate(formData) {
    'use server';

    const updatedMovie = {
      id: formData.get('id'),
      movie_name: formData.get('movie_name'),
      movie_year: formData.get('movie_year'),
      movie_genre: formData.get('movie_genre'),
      movie_director: formData.get('movie_director'),
      user_comments: formData.get('user_comments'),
      movie_rating: Number(formData.get('movie_rating')),
    };

    await updateMovie(params.id, updatedMovie);
  }

  return (
    <div>
        <div style={{ textAlign: 'right' }}>
        <Link href="/admin">Back</Link>
      </div>
      <h1>Edit Movie</h1>
      <form action={handleUpdate}>
        <input type="hidden" name="id" defaultValue={movie.id} />
        <div>
          <label>Movie Name</label>
          <input name="movie_name" defaultValue={movie.movie_name} />
        </div>
        <div>
          <label>Movie Year</label>
          <input name="movie_year" defaultValue={movie.movie_year} />
        </div>
        <div>
          <label>Genre</label>
          <input name="movie_genre" defaultValue={movie.movie_genre} />
        </div>
        <div>
          <label>Director</label>
          <input name="movie_director" defaultValue={movie.movie_director} />
        </div>
        <div>
          <label>Comments</label>
          <textarea name="user_comments" defaultValue={movie.user_comments} />
        </div>
        <div>
          <label>Rating (1-5)</label>
          <input name="movie_rating" type="number" defaultValue={movie.movie_rating} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
