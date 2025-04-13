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
    <div>
      <h1>Admin - Manage Movies</h1>
      <Link href="/admin/create">Create New Movie</Link>

      <table>
        <thead>
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
              <td>{movie.movie_year}</td>
              <td>
                <Link href={`/admin/edit/${movie.id}`}>Edit</Link>
                <form action={handleDelete} style={{ display: 'inline', marginLeft: '1rem' }}>
                  <input type="hidden" name="id" value={movie.id} />
                  <button type="submit">Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
