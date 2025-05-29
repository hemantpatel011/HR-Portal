import express from "express"
import {employeeRegister,employeeLogin} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/register",employeeRegister);
router.post("/login",employeeLogin);

export default router;
