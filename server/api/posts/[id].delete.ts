import Post from "../../models/post.model"

export default defineEventHandler(async (event) => {
  // Get the id from the event parameters
  const id = event.context.params?.id

  // Delete Post
  try {
    return await Post.findByIdAndRemove(id)
    // If the post was successfully deleted, Mongoose will return the deleted document
    // If no document was found for the given id, response will be null
  } catch (e) {
    const error = e as Error;
    console.error("An error occurred while deleting the post: ", error.message);
    return { message: "An error occurred", error: error.message };
  }
})
