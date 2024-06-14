import jwt from "jsonwebtoken";
import { getKey } from "../utils/jwt.utils.js";

export const authenticateToken = (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized request. Missing token." });
  }

  jwt.verify(token, getKey, { algorithms: ["RS256"] }, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Unauthorized request. Invalid token." });
    }

    req.user = user;
    next();
  });
};
