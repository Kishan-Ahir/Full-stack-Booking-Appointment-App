const express = require("express");
const path = require("path");
const User = require("../models/user");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("app", "root", "Chandravadiya@2003", {
  dialect: "mysql",
  host: "localhost",
});

exports.getuser = async (req, res) => {
  try {
    const usersData = await User.findAll();
    res.status(200).json(usersData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to retrieve users." });
  }
};

exports.postuser = async (req, res) => {
  try {
    const { name, email, phonenumber } = req.body;
    await User.create({ name, email, phonenumber });
    res.status(201).redirect("/getusers");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create user." });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const userId = req.params.userId;
    await User.destroy({ where: { id: userId } });
  } catch (err) {
    console.log(err);
  }
};

exports.edituser = async (req, res) => {
  try {
    const userId = req.params.userId;
    await User.destroy({ where: { id: userId } });
  } catch (err) {
    console.log(err);
  }
};

exports.getform = async (req, res, next) => {
   // Creating the model in the database
   await sequelize.sync()
     .then(() => {
       res.sendFile( path.join(__dirname, "..", "views", "Appointment Caller.html"));
     })
     .catch((err) => {
       console.log("Not able to start server because of this error: " + err);
     });
};