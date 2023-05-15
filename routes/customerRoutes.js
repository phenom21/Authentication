const express = require('express');
const router = express.Router();
const customer = require("../models/customerModel");
const auth = require("../middlewares/auth");

router.post("/", auth, async(req,res)=>{
    const newCustomer = new customer({
        name: req.body.name
    });
    const savedCustomer = await newCustomer.save();
    res.status(200).json({
        success: true,
        message: "Customer created successfully"
    })
});

module.exports = router;