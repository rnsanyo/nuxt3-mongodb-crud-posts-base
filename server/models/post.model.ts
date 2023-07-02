import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
)

const Post = model('Post', PostSchema)

export default Post