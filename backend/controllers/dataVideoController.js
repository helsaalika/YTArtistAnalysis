// videoController.js
import DataVideo from '../models/data_video.js';

export const getAllVideos = async (req, res) => {
  try {
    const allVideos = await DataVideo.find();
    res.json(allVideos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
