"use client";

import { useState } from "react";
import { updateMovie } from "@/app/actions";
import Link from 'next/link';

export default function EditMovieForm({ movie }) {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const updatedMovie = {
      id: formData.get("id"),
      movie_name: formData.get("movie_name").trim(),
      movie_year: formData.get("movie_year"),
      movie_genre: formData.get("movie_genre"),
      movie_director: formData.get("movie_director"),
      user_comments: formData.get("user_comments"),
      movie_rating: Number(formData.get("movie_rating")),
    };

    const validationErrors = [];
    if (
      updatedMovie.movie_name.length < 1 ||
      updatedMovie.movie_name.length > 100
    ) {
      validationErrors.push(
        "The movie name must be between 1 and 100 characters."
      );
    }

    const year = new Date(updatedMovie.movie_year).getFullYear();
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
      validationErrors.push("The year cannot be a future year.");
    }

    if (
      isNaN(updatedMovie.movie_rating) ||
      updatedMovie.movie_rating < 1 ||
      updatedMovie.movie_rating > 5
    ) {
      validationErrors.push("You must provide rating between 1 to 5.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors([]);
    await updateMovie(updatedMovie.id, updatedMovie);
    setSuccess(true);
  }

  return (
    <div>
         <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Edit Movie</h2>
        <Link href="/admin" className="btn btn-secondary">Back</Link>
      </div>
    
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <ul className="alert alert-danger list-unstyled">
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}

      {success && (
        <div className="alert alert-success">Movie successfully saved!</div>
      )}

      <input type="hidden" name="id" defaultValue={movie.id} />

      <div className="mb-3">
        <label className="form-label">Movie Name</label>
        <input
          name="movie_name"
          defaultValue={movie.movie_name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Movie Year</label>
        <input
          name="movie_year"
          defaultValue={movie.movie_year}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Genre</label>
        <input
          name="movie_genre"
          defaultValue={movie.movie_genre}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Director</label>
        <input
          name="movie_director"
          defaultValue={movie.movie_director}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Comments</label>
        <textarea
          name="user_comments"
          defaultValue={movie.user_comments}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Rating (1–5)</label>
        <input
          name="movie_rating"
          type="number"
          defaultValue={movie.movie_rating}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-warning">
        Submit
      </button>
    </form>
    </div>
  );
}