import bcrypt from "bcrypt";
import { Users } from "../models/index.js";

export async function CreateAdminDefault() {
  const admin = await Users.findOne({ where: { email: "admin@admin.com" } });
  if (!admin) {
    const hashPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);
    await Users.create({
      name: "Admin",
      email: "admin@admin.com",
      password: hashPassword,
      isAdmin: true,
    });
  }
}
