import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

export const loginUser = async (req: Request, res: Response) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).send("Cannot find user");
  }
  try {
    console.log(user.username);
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send("Success");
    } else {
      res.status(401).send("Failure");
    }
  } catch {
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
