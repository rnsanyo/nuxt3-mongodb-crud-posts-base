import Post from "../../models/post.model"

export default defineEventHandler(async (event) => {
	try {
		return await Post.find();
	} catch (e) {
		console.error("An error occurred while fetching posts: ", e);
	}
})