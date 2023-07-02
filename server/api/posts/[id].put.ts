import Post from "../../models/post.model"

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event)

  // Get the id from the event parameters
  const id = event.context.params?.id

  // Update Post
  try {
    return await Post.findByIdAndUpdate(id, body, { new: true })
    // The { new: true } option ensures that the updated document is returned
  } catch (e) {
    console.error("An error occurred while updating the post: ", e);
  }
})
