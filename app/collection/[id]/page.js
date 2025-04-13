import Link from "next/link";

async function getMovie(id) {
    const res = await fetch(`http://localhost:4000/movies/${id}`);
    return await res.json();
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/movies");
  const movies = await res.json();

  return movies.slice(0, 10).map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default async function MovieDetailPage({ params }) {
  const movie = await getMovie(params.id);

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
