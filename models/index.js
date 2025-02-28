import { Users } from "./users.model.js";
import { Movies } from "./movies.models.js";
import { Reviews } from "./reviews.models.js";
import { WatchList } from "./watchList.moudels.js";

const models = {
  Users,
  Movies,
  WatchList,
  Reviews,
};

// Set up associations
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export { Users, Movies, Reviews, WatchList };
