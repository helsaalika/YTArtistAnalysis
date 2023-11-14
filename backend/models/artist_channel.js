// artist_channel.js
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoId: String,
  // tambahkan field lainnya sesuai kebutuhan
});

const artistChannelSchema = new mongoose.Schema({
  Channel_name: {
    type: String,
    required: true,
  },
  Subscriber: {
    type: Number,
    required: true,
  },
  Views: {
    type: Number,
    required: true,
  },
  Total_videos: {
    type: Number,
    required: true,
  },
  Videos: [videoSchema],
});

const ArtistChannel = mongoose.model('ArtistChannel', artistChannelSchema);

export default ArtistChannel;
