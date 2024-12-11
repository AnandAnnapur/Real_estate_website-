import e from "express";
import { signup } from "../controller/auth.controller.js";

const router = e.Router();

router.post("/signup",signup)
export default router;