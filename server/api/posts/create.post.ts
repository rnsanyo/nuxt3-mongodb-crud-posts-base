import Post from "../../models/post.model"

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event)

  // Create Post
  try {
    return await Post.create(body)
  } catch (e) {
    console.error("An error occurred while creating the post: ", e);
  }
})