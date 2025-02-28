import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const Users = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

Users.associate = (models) => {
  Users.hasMany(models.Reviews, {
    foreignKey: "userId",
    as: "reviews",
  });
  Users.hasMany(models.WatchList, {
    foreignKey: "userId",
    as: "watchList",
  });
};
