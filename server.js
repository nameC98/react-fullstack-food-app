// sk_test_51OcnmzHFYlm7ckvV7Rn8GUxL7JD9iya6pvq2lxeUxKbTLsbZ7hHy6PIG7jYPoSuu1RLjixcJFP9uvLAhMgjVKSc8004aoy5LHE

// Octopus Carpaccio :prod_PRhdzC1AIxArHl

// Roster Boster:  prod_PRhhy3TKVzqOaE

// Octopus Carpaccio:  prod_PRhdzC1AIxArHl

// const express = require("express");
import express from "express";
import cors from "cors";
// var cors = require("cors");
import stripe from "stripe";
// const stripe = require("stripe")(
//   "sk_test_51OcnmzHFYlm7ckvV7Rn8GUxL7JD9iya6pvq2lxeUxKbTLsbZ7hHy6PIG7jYPoSuu1RLjixcJFP9uvLAhMgjVKSc8004aoy5LHE"
// );

const stripeInstance = stripe(
  "sk_test_51OcnmzHFYlm7ckvV7Rn8GUxL7JD9iya6pvq2lxeUxKbTLsbZ7hHy6PIG7jYPoSuu1RLjixcJFP9uvLAhMgjVKSc8004aoy5LHE"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
              req.body.items
              [
                  {
                      id: 1,
                      quantity: 3
                  }
              ]

              stripe wants
              [
                  {
                      price: 1,
                      quantity: 3
                  }
              ]
              */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripeInstance.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://http://localhost:5173/grill",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
