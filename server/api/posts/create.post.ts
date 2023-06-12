// import GuideModel from "~~/server/models/Guide.model";
// import { GuideSchema } from "~~/server/validation";

// export default defineEventHandler(async (event) => {
//     // Get data form body
//     const body = await readBody(event)

//     // validate
//     let { error } = GuideSchema.validate(body)
//     if (error) {
//         throw createError({
//             message: error.message.replace(/"/g, ""),
//             statusCode: 400,
//             fatal: false,
//         })
//     }

//     // Create Guide
//     try {
//         await GuideModel.create(body)
//         return { message: "Post created" }
//     } catch (e) {
//         throw createError({
//             message: e.message
//         })
//     }
// })