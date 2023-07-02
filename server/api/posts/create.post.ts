import Post from "../../models/post.model"

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event)

  // Create Post
  try {
    const response = await Post.create(body)
    return response
  } catch (e) {
    console.error("An error occurred while creating the post: ", e);
  }
})