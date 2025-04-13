import { createMovie } from '@/app/actions';
import Link from 'next/link';

export default function CreateMoviePage() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Create New Movie</h1>
        <Link href="/admin" className="btn btn-secondary">Back</Link>
      </div>

      <form action={createMovie}>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input name="id" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Movie Name</label>
          <input name="movie_name" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Movie Year</label>
          <input name="movie_year" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input name="movie_genre" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Director</label>
          <input name="movie_director" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Comments</label>
          <textarea name="user_comments" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating (1–5)</label>
          <input name="movie_rating" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
