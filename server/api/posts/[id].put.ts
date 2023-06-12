// import GuideModel from "~~/server/models/Guide.model";
// import { GuideSchema } from "~~/server/validation";

// export default defineEventHandler(async (event) => {
//     // Get data from body 
//     const body = await readBody(event)
//     // Get id from params
//     const id = event.context.params.id

//     // validate
//     let { error } = GuideSchema.validate(body, { abortEarly: true, allowUnknown: true })

//     if (error) {
//         throw createError({
//             message: error.message.replace(/"/g, ""),
//             statusCode: 400,
//             fatal: false,
//         })
//     }

//     // Update Guide
//     try {
//         await GuideModel.findByIdAndUpdate(id, body)
//         return { message: "Guide Updated" }
//     } catch (e) {
//         throw createError({
//             message: e.message,
//         })
//     }

// })