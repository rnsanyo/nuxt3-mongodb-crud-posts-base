// import GuideModel from "~~/server/models/Guide.model";

// export default defineEventHandler(async (event) => {
//     // Get id from params
//     const id = event.context.params.id

//     // Delete post
//     try {
//         await GuideModel.findByIdAndRemove(id)
//         return { message: "Post Removed" }
//     } catch (e) {
//         throw createError({
//             message: e.message,
//         })
//     }

// })