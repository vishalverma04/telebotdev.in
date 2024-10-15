import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CheckoutPage = () => {
  const { plan } = useParams();

  useEffect(() => {
    // Razorpay Payment Integration
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
      amount: plan === 'basic' ? 500 * 100 : 1000 * 100, // Amount in paise (500 INR or 1000 INR)
      currency: 'INR',
      name: 'TeleBotDev',
      description: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
      handler: function (response) {
        alert(`Payment successful. Razorpay payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '1234567890',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }, [plan]);

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Checkout</h1>
      <p className="text-center text-gray-600">Processing your payment...</p>
    </div>
  );
};

export default CheckoutPage;
