import Link from 'next/link';
import { getAllMovies, deleteMovie } from '@/app/actions';

export default async function AdminPage() {
  const movies = await getAllMovies();

  async function handleDelete(formData) {
    'use server';
    const id = formData.get('id');
    await deleteMovie(id);
  }

 
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Admin - Manage Movies</h1>
        <Link href="/admin/create" className="btn btn-primary">
          Create New Movie
        </Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.movie_name}</td>
              <td>{new Date(movie.movie_year).getFullYear()}</td>
              <td>
                <div className="d-flex gap-2">
                  <Link href={`/admin/edit/${movie.id}`} className="btn btn-sm btn-warning">
                    E
                  </Link>
                  <form action={handleDelete}>
                    <input type="hidden" name="id" value={movie.id} />
                    <button type="submit" className="btn btn-sm btn-danger">
                      D
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
