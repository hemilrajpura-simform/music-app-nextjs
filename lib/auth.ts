import jwt from "jsonwebtoken";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req, res) => {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;
    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (e) {
        res.status(401);
        res.json({ error: "Not authorized" });
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "Not authorized" });
  };
};
