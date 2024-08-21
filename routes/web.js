import express from "express";
const router = express.Router();

import studentController from "../controllers/studentController.js";

router.get("/", studentController.getAll);
router.get("/:id", studentController.getById)
router.post("/" , studentController.createStduent);

export default router;

