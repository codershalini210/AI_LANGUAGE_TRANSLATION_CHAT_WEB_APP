// middleware/authMiddleware.js

import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ message: "Not authorized" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "No token" });
  }
};
