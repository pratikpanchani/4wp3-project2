'use server';

import { revalidatePath } from 'next/cache';

const API_URL = 'http://localhost:4000/movies';

export async function getAllMovies() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function getMovie(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

export async function createMovie(formData) {
  const newMovie = {
    id: formData.get('id'),
    movie_name: formData.get('movie_name'),
    movie_year: formData.get('movie_year'),
    movie_genre: formData.get('movie_genre'),
    movie_director: formData.get('movie_director'),
    user_comments: formData.get('user_comments'),
    movie_rating: Number(formData.get('movie_rating')),
  };

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newMovie),
  });

  revalidatePath('/collection');
  revalidatePath('/admin');
}

export async function updateMovie(id, updatedData) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  revalidatePath('/collection');
  revalidatePath('/admin');
}

export async function deleteMovie(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  revalidatePath('/collection');
  revalidatePath('/admin');
}
