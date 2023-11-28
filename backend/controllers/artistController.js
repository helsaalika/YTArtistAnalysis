// artistController.js
import ArtistChannel from "../models/artist_channel.js";

export const getAllData = async (req, res) => {
  try {
    const allData = await ArtistChannel.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;
    // Use the ID to fetch the specific artist from the database
    const artist = await ArtistChannel.findById(id);
    res.json(artist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
