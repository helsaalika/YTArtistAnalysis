// routes/routes.js
import express from "express";
import { getAllData } from "../controllers/artistController.js";
import { getAllVideos } from "../controllers/dataVideoController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("WOI BISA GA NIH?");
});

router.get("/data", getAllData);
router.get("/data-video", getAllVideos);

export default router;
