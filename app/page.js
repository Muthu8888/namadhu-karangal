import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, HandHelping } from "lucide-react";

export default function TrustWebsite() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleDonate = (amount) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // replace this
      amount: amount * 100,
      currency: "INR",
      name: "Namadhu Karangal",
      description: "Donation",
      handler: function (response) {
        alert("Thank you for your donation! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#16a34a",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white p-10 rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Namadhu Karangal</h1>
        <p className="text-lg max-w-2xl">
          Extending helping hands to those in need. Together, we can bring hope,
          dignity, and change to countless lives.
        </p>
        <Button onClick={() => handleDonate(500)} className="mt-6 bg-white text-green-600 font-semibold px-6 py-3 rounded-xl">
          Donate ₹500
        </Button>
      </section>

      {/* IMPACT */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-center">Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <Heart className="mx-auto mb-3" />
              <h3 className="font-semibold">₹500</h3>
              <p className="text-gray-500">Provides meals for families</p>
              <Button onClick={() => handleDonate(500)} className="mt-4">Donate</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <Users className="mx-auto mb-3" />
              <h3 className="font-semibold">₹1000</h3>
              <p className="text-gray-500">Supports education for children</p>
              <Button onClick={() => handleDonate(1000)} className="mt-4">Donate</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <HandHelping className="mx-auto mb-3" />
              <h3 className="font-semibold">₹2500</h3>
              <p className="text-gray-500">Helps medical emergencies</p>
              <Button onClick={() => handleDonate(2500)} className="mt-4">Donate</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CUSTOM DONATION */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Custom Donation</h2>
        <input
          type="number"
          id="customAmount"
          placeholder="Enter amount"
          className="border p-3 rounded-lg mr-3"
        />
        <Button
          onClick={() => {
            const amt = document.getElementById("customAmount").value;
            if (amt) handleDonate(amt);
          }}
          className="bg-green-600 text-white"
        >
          Donate Now
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 p-6 border-t">
        © 2026 Namadhu Karangal Trust. All rights reserved.
      </footer>
    </div>
  );
}
