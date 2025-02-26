import { Users } from "../models/index.js";
import { generateToken } from "../utils/helpers.js";
import bcrypt from "bcrypt";
export async function register(req, res) {
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = await Users.create({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  const accessToken = generateToken(newUser.id);

  res.status(200).json({
    success: true,
    message: "User registered successfully",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      accessToken,
    },
  });
}

export async function login(req, res) {
  const user = await Users.findOne({
    where: { email: req.body.email },
  });

  if (!user)
    return res.status(404).json({ message: "Invalid email or password" });

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordValid)
    return res.status(404).json({ message: "Invalid email or password" });

  const access_token = generateToken(user.id);

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      access_token,
    },
  });
}

export async function getUser(req, res) {
  const user = await Users.findByPk(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({
    success: true,
    message: "User found",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}
