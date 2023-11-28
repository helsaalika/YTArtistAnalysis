import express from "express";
import { getArtistById, getAllData } from "../controllers/artistController.js";
import { getVideoById, getAllVideos } from "../controllers/dataVideoController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("WOI BISA GA NIH?");
});

// Route to get a specific artist by ID
router.get("/artist/:id", getArtistById);

// Route to get all artists
router.get("/data", getAllData);

// Route to get a specific video by ID
router.get("/video/:id", getVideoById);

// Route to get all videos
router.get("/data-video", getAllVideos);

export default router;
