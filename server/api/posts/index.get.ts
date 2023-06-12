export default defineEventHandler(async (event) => {

	return await fetch('https://dummyjson.com/posts')
		.then(res => res.json())

})