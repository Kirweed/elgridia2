import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = generateAccessToken(username);
      const refreshToken = generateRefreshToken(username);
      await User.updateOne(
        { username },
        {
          $push: { refreshTokens: refreshToken },
        }
      );
      res
        .status(200)
        .json({ accessToken: accessToken, refreshToken: refreshToken });
    } else {
      res.status(401).send("Failure");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(409).send("User already exsist");
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    user.save();
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
};

interface UserableRequest extends Request {
  user?: any;
}

export const test = (req: UserableRequest, res: Response) => {
  res.send("success");
};

export const getNewAccessToken = async (
  req: Request<{}, {}, { token: string }>,
  res: Response
) => {
  const { token: refreshToken } = req.body;
  if (!process.env.REFRESH_TOKEN_SECRET) return res.sendStatus(500);
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, user) => {
      console.log(user);
      if (err || !user || typeof user === "string") return res.sendStatus(403);
      try {
        const dbUser = await User.findOne({ username: user.username });
        if (!dbUser?.refreshTokens.includes(refreshToken))
          return res.sendStatus(403);

        const newAccessToken = generateAccessToken(user.username);
        res.status(200).json({
          token: newAccessToken,
        });
      } catch {
        res.sendStatus(500);
      }
    }
  );
};

export const authenticateToken = (
  req: UserableRequest,
  res: Response,
  next: NextFunction
) => {
  if (!process.env.ACCESS_TOKEN_SECRET || !process.env.REFRESH_TOKEN_SECRET)
    return res.sendStatus(500);

  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).send("unauthorized");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

const generateAccessToken = (username: string) =>
  process.env.ACCESS_TOKEN_SECRET
    ? jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 15 })
    : null;

const generateRefreshToken = (username: string) =>
  process.env.REFRESH_TOKEN_SECRET
    ? jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET)
    : null;
