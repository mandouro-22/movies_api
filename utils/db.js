import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_FILE_NAME,
});

export const initDB = async () => {
  try {
    await sequelize.sync();
    console.log("Connected to the SQLite database.");
  } catch (error) {
    console.error("Unable to connect to the SQLite database:", error);
  }
};
