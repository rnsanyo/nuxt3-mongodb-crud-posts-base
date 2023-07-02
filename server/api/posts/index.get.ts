import Post from "../../models/post.model"

export default defineEventHandler(async (event) => {
	try {
		const response = await Post.find();
		console.log('fetching again')
		return response;
	} catch (e) {
		console.error("An error occurred while fetching posts: ", e);
	}
})