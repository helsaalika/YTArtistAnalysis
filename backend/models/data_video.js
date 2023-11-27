import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  video_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  views: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  comments: {
    type: Number,
    required: true,
  },
  upload_date: {
    type: Date,
    required: true,
  },
  engagement: {
    type: Number,
    required: true,
  },
  cluster_video: {
    type: Number,
    required: true,
  },
  cluster_video_channel: {
    type: Number,
    required: true,
  },
});

const DataVideo = mongoose.model("DataVideo", videoSchema);

export default DataVideo;
