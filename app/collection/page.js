import Link from 'next/link';

async function getMovies() {
  try {
    const res = await fetch('http://localhost:4000/movies');
    return await res.json();
  } catch (err) {
    console.error('Error fetching movies:', err);
    return [];
  }
}

export default async function CollectionPage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>Movie Collections</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div>
               {movie.id}: <strong>{movie.movie_name}</strong>
            </div>
            <Link href={`/collection/${movie.id}`}>
              More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
