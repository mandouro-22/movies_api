import { Users } from "../models/index.js";
export async function authenticateAdmin(req, res, next) {
  console.log(req.user);
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const admin = await Users.findByPk(req.user.id);
  if (!admin.isAdmin) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
}
