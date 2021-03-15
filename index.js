const express = require("express");
const mongoose = require("mongoose");
const User = require("./routes/model");
const dbb = require("./db/connection");
const bodyparser = require("body-parser");
var jsonparser = bodyparser.json();

const app = express();

//API//
app.listen(5000, () => {
  console.log("ready to start");
});

//fetch data from database//
app.get("/", (req, res) => {
  User.find().then((data) => {
    res.json(data);
  });
});

//Send Data from body to Database//
app.post("/", jsonparser, (req, res) => {
  const newuser = new User({
    _id: new mongoose.Types.ObjectId(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  });
  newuser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => console.warn(error));
});

//Delete Data from Database Using ID//
app.delete("/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.warn(error);
    });
});

// Update data to database Using ID//
app.put("/:id", jsonparser, (req, res) => {
  User.updateMany(
    { _id: req.params.id },
    {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.warn(error);
    });
});
