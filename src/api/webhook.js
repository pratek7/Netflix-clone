import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permission.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointsecret = process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async (session) => {
  return await app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("success and add database", session.id);
    });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const reqBuffer = await buffer(req);
    const payload = reqBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointsecret);
    } catch (err) {
      console.log(err);
      return res.status(400).send("webhook error" + err.message);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      return fullfillOrder(session).then(() => {
        res.status(200).send("sucess");
      });
    }
  }
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
