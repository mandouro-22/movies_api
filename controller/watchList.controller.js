import { Movies, WatchList } from "../models/index.js";
export async function WatchLists(req, res) {
  const watchLists = await WatchList.create({
    movieId: +req.params.movieId,
    userId: req.user.id,
  });

  res.status(201).json({ watchLists });
}

export async function getWatchListsAll(req, res) {
  const getAll = await WatchList.findAll({
    where: { userId: req.user.id },
    include: [
      {
        model: Movies,
        as: "movie",
        attributes: ["id", "name"],
      },
    ],
  });
  res.json(getAll);
}

export async function removeMovieFromWatchList(req, res) {
  const remove = await WatchList.destroy({
    where: {
      movieId: +req.params.movieId,
      userId: req.user.id,
    },
  });

  if (!remove) {
    return res.status(404).json({ message: "Movie not found in watchlist" });
  }

  res.json({ message: "Movie removed from watchlist" });
}
