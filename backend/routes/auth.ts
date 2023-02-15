import express from "express";
import {
  authenticateToken,
  getNewAccessToken,
  loginUser,
  registerUser,
  test,
} from "../controllers/UserControllers";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/token", getNewAccessToken);
router.get("/test", authenticateToken, test);

export default router;
