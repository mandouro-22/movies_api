import { Movies } from "../models/index.js";
export async function createMovie(req, res) {
  const { name, genre, releaseDate } = req.body;
  const movies = await Movies.create({
    name: name,
    genre: genre,
    releaseDate: releaseDate,
  });

  res.status(201).json(movies);
}

export async function updateMovies(req, res) {
  const movieId = await Movies.findByPk(req.params.id);

  if (!movieId) return res.status(404).json({ message: "Movie not found" });

  movieId.name = req.body.name;
  movieId.genre = req.body.genre;
  movieId.releaseDate = req.body.releaseDate;

  await movieId.save();
  res.json(movieId);
}

export async function deleteMovie(req, res) {
  const movieId = await Movies.findByPk(req.params.id);
  if (!movieId) return res.status(404).json({ message: "Movie not found" });
  await movieId.destroy();
  res.status(200).json({ message: "Deleted Movie Successfuly" });
}

export async function getAllMovies(req, res) {
  const movies = await Movies.findAll();
  res.json(movies);
}

export async function getMovieById(req, res) {
  const moviesId = await Movies.findByPk(req.params.id);

  if (!moviesId) return res.status(404).json({ message: "Movie Not Found" });

  res.status(200).json(moviesId);
}
