import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const Movies = sequelize.define(
  "Movies",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "movies",
    timestamps: true,
  }
);

Movies.associate = (models) => {
  Movies.belongsTo(models.Reviews, {
    foreignKey: "movieId",
    as: "reviews",
  });
  Movies.hasMany(models.WatchList, {
    foreignKey: "movieId",
    as: "watchList",
  });
};
