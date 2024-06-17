const Contact = require("../models/contactModel");
const { errorHandler } = require("../middleware/errorMiddleware");
const asyncHandler = require('express-async-handler')


exports.sendContact = asyncHandler(async (req, res, next) => {
    const { name, email, phone, services, message } = req.body

    if (!name || !email || !phone || !services || !message) {
        return next(errorHandler(400, "Please fill all required fields"))
    }

    const contact = await Contact.create({ name, email, phone, services, message })

    return res.status(200).json({
        success: true,
        message: "Thank you for reaching out! We will get back to you shortly.",
        contact
    })
})