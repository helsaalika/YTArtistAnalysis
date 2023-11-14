// artistController.js
import ArtistChannel from '../models/artist_channel.js';

export const getAllData = async (req, res) => {
  try {
    const allData = await ArtistChannel.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
