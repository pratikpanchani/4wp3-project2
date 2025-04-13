import Link from "next/link";
import { getMovie, getAllMovies } from '@/app/actions';

export async function generateStaticParams() {
  const movies = await getAllMovies();
  return movies.slice(0, 10).map((movie) => ({ id: movie.id.toString() }));
}

export default async function MovieDetail({ params }) {
  const { id } = await params;
  const movie = await getMovie(id);

  if (!movie) {
    return (
      <div className="container mt-4">
        <h1>Movie N/A</h1>
        <Link href="/collection" className="btn btn-secondary mt-3">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
    <div className="text-end mb-3">
    <Link href="/collection" className="btn btn-secondary">
      Back
    </Link>
  </div>
      <h1 className="mb-4">Movie details for {movie.movie_name}:</h1>
      <table className="table table-bordered">
        <tbody>
          {Object.entries(movie).map(([key, value]) => (
            <tr key={key}>
              <th>
                {{
                  id: "ID",
                  movie_name: "Movie Name",
                  movie_year: "Release Date",
                  movie_genre: "Genre",
                  movie_director: "Director",
                  user_comments: "User Comments",
                  movie_rating: "Rating (1 to 5)",
                }[key] || key}
              </th>
              <td>{String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
