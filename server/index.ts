import { Nitro } from 'nitropack';
import mongoose from "mongoose";
import { usePostsStore } from '../stores/postsStore'

export default async (_nitroAppp: Nitro) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e)
  }
};