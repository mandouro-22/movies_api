import { Reviews, Users, Movies } from "../models/index.js";

export async function createReview(req, res) {
  console.log(req.body);
  const review = await Reviews.create({
    rating: req.body.rating,
    text: req.body.text,
    movieId: +req.params.movieId,
    userId: req.user.id,
  });

  res.status(201).json(review);
}
export async function getReviewByMoveId(req, res) {
  const reviews = await Reviews.findAll({
    where: { movieId: +req.params.movieId },
    include: [
      { model: Users, as: "user", attributes: ["id", "name"] },
      {
        model: Movies,
        as: "movie",
        attributes: ["id", "name"],
      },
    ],
  });
  res.json(reviews);
}
