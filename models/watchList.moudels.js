import { sequelize } from "../utils/db.js";
import { DataTypes } from "sequelize";

export const WatchList = sequelize.define(
  "watchList",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "watchList",
    timestamps: true,
  }
);

WatchList.associate = (models) => {
  WatchList.belongsTo(models.Users, {
    foreignKey: "userId",
    as: "user",
  });
  WatchList.belongsTo(models.Movies, {
    foreignKey: "movieId",
    as: "movie",
  });
};
