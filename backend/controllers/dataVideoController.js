// videoController.js
import DataVideo from "../models/data_video.js";

export const getAllVideos = async (req, res) => {
  try {
    const allVideos = await DataVideo.find();
    res.json(allVideos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    // Use the ID to fetch the specific video from the database
    const video = await DataVideo.findById(id);
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
