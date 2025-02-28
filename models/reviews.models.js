import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const Reviews = sequelize.define(
  "Review",
  {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
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
    tableName: "reviews",
    timestamps: true,
  }
);

Reviews.associate = (models) => {
  Reviews.belongsTo(models.Users, {
    foreignKey: "userId",
    as: "user",
  });
  Reviews.belongsTo(models.Movies, {
    foreignKey: "movieId",
    as: "movie",
  });
};
