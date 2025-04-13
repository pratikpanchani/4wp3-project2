import Link from 'next/link';

async function getMovies() {
        const res = await fetch('http://localhost:4000/movies');
    return await res.json();
}

export default async function CollectionPage() {
  const movies = await getMovies();

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Movie Collection</h2>
      <div className="list-group">
        {movies.length === 0 && (
          <div className="alert alert-danger">No movies are available to show here...</div>
        )}
        {movies.map((movie) => (
          <div key={movie.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {movie.id}: <strong>{movie.movie_name}</strong> 
            </div>
            <Link href={`/collection/${movie.id}`} className="btn btn-info btn-sm">
              More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
