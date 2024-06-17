const mongoose = require("mongoose")

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "contact-us"
        });
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(`Database Error occurs: ${error}`)
        process.exit(1)
    }
}

module.exports = connectdb