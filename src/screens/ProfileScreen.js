import React from "react";
import axios from "axios";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";
import { loadStripe } from "@stripe/stripe-js"; // stripe plugin
const stripPromise = loadStripe(process.env.stripe_public_key);
const ProfileScreen = () => {
  const createCheckout = async () => {
    const stripe = await stripPromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      email: user.email,
    });
    //redirect to payment info
    const result = await stripe.redirectToCheckout();
    if (result.error) alert(result.error.message);
  };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
