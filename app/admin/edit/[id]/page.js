import EditMovieForm from './EditMovieForm';

async function getMovie(id) {
  const res = await fetch(`http://localhost:4000/movies/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function EditMovie({ params }) {
  const movie = await getMovie(params.id);

  return (
    <div>
      <h1>Edit Movie: {movie.movie_name}</h1>
      <EditMovieForm movie={movie} />
    </div>
  );
}
