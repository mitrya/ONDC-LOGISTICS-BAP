const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const stripe = require('stripe')

router.post("/create-checkout-session", async (req,res) => {
	const { order } = req.body
	const session = await stripe.checkout.session.create({
		payment_method_types : ["card"],
		line_items : [
			{
				price_data : {
					currency : "inr",
					product_details : {
						name : order.name

					},
					unit_amount : order.price,
				}, 
				distance : order.distance
			}
		],
		mode : "payment",
		success_url: "http://localhost:5173/success", 
		cancel_url: "http://localhost:5173/cancel", 
	}); 
	res.json({ id: session.id }); 
}); 