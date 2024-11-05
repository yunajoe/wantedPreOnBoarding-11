import express from "express";

import * as authController from "../controllers/authController";

const router = express.Router();

router.post("/login", authController.login);
router.post("/create", authController.signUp);
router.post("/token/verify", authController.verifyTokenAPI);

export default router;
