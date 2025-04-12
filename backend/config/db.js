import mongoose from "mongoose"

 export const connectDb = async () => {

    try {

        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`mongodb connected : ${conn.connection.host}`)

    } catch (error) {
        console.error(`Error : ${error.message}`)
        process.exit(1) // process code 1 means exit with failures, 0 means success
    }
}

