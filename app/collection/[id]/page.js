import Link from 'next/link';

async function getMovie(id) {
  try {
    const res = await fetch(`http://localhost:4000/movies/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error('Error fetching movie:', err);
    return null;
  }
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/movies');
  const movies = await res.json();

  return movies.slice(0, 10).map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default async function MovieDetailPage({ params }) {
    let movie;
    if (params?.id) {
        movie = await getMovie(params.id);
    }

  return (
    <div>
      <Link href="/collection">Back</Link>
      <h1 className="mb-4">{movie.movie_name} Details</h1>
      <table>
        <tbody>
          {Object.entries(movie).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
