"use server";

import { getMovie } from '@/app/actions';
import EditMovieForm from './EditMovieForm';

export default async function EditMoviePage({ params }) {
    const { id } = await params;
    const movie = await getMovie(id);
  return (
    <div className="container mt-5">
      <EditMovieForm movie={movie} />
    </div>
  );
}