import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TermConditions from '../RazorpayTermAndCondtions/TermConditions'; // Import the Terms and Conditions component

const ConfigureBot = () => {
  const { plan } = useParams();
  const [botToken, setBotToken] = useState('');
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showTerms, setShowTerms] = useState(false); // State for showing the terms modal

  const isFreePlan = plan === 'free';

  const handleTokenChange = (e) => {
    setBotToken(e.target.value);
  };

  // Function to launch Razorpay after terms are accepted
  const launchRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay API Key
      amount: plan === 'basic' ? 50000 : 100000, // Amount in paise (500 or 1000 INR)
      currency: "INR",
      name: "TeleBotDev",
      description: `Payment for ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
      handler: function (response) {
        console.log(response);
        setPaymentCompleted(true);
        alert('Payment Successful');
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        plan: plan,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleLaunch = () => {
    console.log(`Bot launched with token: ${botToken} for ${plan} plan`);
    alert(`Bot successfully launched for the ${plan} plan!`);
  };

  const proceedToPayment = () => {
    setShowTerms(false); // Close the terms modal
    launchRazorpay(); // Start Razorpay payment
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Configure Your Bot</h1>
      <p className="text-center text-gray-600 mb-6">
        You have chosen the <span className="font-semibold text-yellow-500">{plan.charAt(0).toUpperCase() + plan.slice(1)}</span> plan.
      </p>

      {/* Payment Section - Visible only for paid plans */}
      {!isFreePlan && !paymentCompleted && (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Complete Payment</h2>
          <p className="text-gray-600 mb-4">Please click the button below to pay for the selected plan.</p>
          <button
            onClick={() => setShowTerms(true)} // Open terms modal
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Pay Now
          </button>
        </div>
      )}

      {/* Bot Token Entry Section */}
      {(isFreePlan || paymentCompleted) && (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="botToken">
            Enter Bot Token
          </label>
          <input
            type="text"
            id="botToken"
            value={botToken}
            onChange={handleTokenChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your bot token here"
          />
          <button
            onClick={handleLaunch}
            className="mt-6 w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Launch Bot
          </button>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <TermConditions onClose={() => setShowTerms(false)} onProceed={proceedToPayment} />
      )}
    </div>
  );
};

export default ConfigureBot;
