// save new order 
// fetch all prev orders
// update order : cancel track 
const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken');
const User = require('../models/person');
const Order = require("../models/order");
const JWT_SECRET = 'secRET';// require(process.env)


router.post("/submit",async (req,res) => {
	console.log(req.body)
})

// Create a new order
router.post("/neworder", async (req, res) => {
  return res.json({message : "success"})
  try {
    const { pickupaddress, deliveryaddress, items, userId, paymentdetails, providercontact} = req.body;
    if (!pickupaddress || !deliveryaddress || !items || !userId || !paymentdetails) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const order = new Order({
      pickupaddress,
      deliveryaddress,
      items,
      userId,
      // transactionId,
      paymentdetails,
      providercontact,
      tracking: false,
      // message, 
      state: "PENDING-CONFIRMATION",
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all orders
router.get("/allorders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a specific order by ID
router.get("/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update an existing order by ID
router.put("/:orderId", async (req, res) => {
  try {
    const { pickupaddress, deliveryaddress, items, userId, paymentdetails, providercontact, tracking, state, transactionId, paymentStatus, message } = req.body;
    if (!pickupaddress || !deliveryaddress || !items || !userId || !paymentdetails) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    order.pickupaddress = pickupaddress;
    order.deliveryaddress = deliveryaddress;
    order.items = items;
    order.userId = userId;
    order.paymentdetails = paymentdetails;
    order.providercontact = providercontact;
    order.tracking = tracking || order.tracking;
    order.state = state || order.state;
    order.transactionId = transactionId || order.transactionId;
    order.paymentStatus = paymentStatus || order.paymentStatus;
    order.message = message;
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete an existing order by ID
router.delete("/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.remove();
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router