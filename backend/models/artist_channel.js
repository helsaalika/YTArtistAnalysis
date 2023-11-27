// artist_channel.js
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  videos: String,
  // tambahkan field lainnya sesuai kebutuhan
});

const artistChannelSchema = new mongoose.Schema({
  channel_name: {
    type: String,
    required: true,
  },
  subscriber: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  total_videos: {
    type: Number,
    required: true,
  },
  engagement: {
    type: Number,
    required: true,
  },
  videos: [videoSchema],
  cluster_artist: {
    type: Number,
    required: true,
  },
});

const ArtistChannel = mongoose.model("artist_channel", artistChannelSchema);

export default ArtistChannel;
