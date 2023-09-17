const mongoose = require("mongoose");
// const router=require("./route");
const express = require("express");

mongoose.connect(
    "mongodb+srv://vaishnavi:vaishnavi20@cluster0.mb4t5sh.mongodb.net/form?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("connected to MongoDB");
  })
  //  console.log('connected to MongoDB');
  .catch((error) => {
    console.log(error);
  });

// module.exports = connectDb;
