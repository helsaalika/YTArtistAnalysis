import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  "Video ID": {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Description: String,
  Views: {
    type: Number,
    required: true,
  },
  Likes: {
    type: Number,
    required: true,
  },
  Comments: {
    type: Number,
    required: true,
  },
  "Upload Date": {
    type: Date,
    required: true,
  },
});

const DataVideo = mongoose.model('DataVideo', videoSchema);

export default DataVideo;
