import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlanSelection = () => {
  const navigate = useNavigate();

  // Redirect to bot configuration page
  const selectPlan = (plan) => {
    navigate(`/configure-bot/${plan}`);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Choose Your Plan</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        {/* Free Plan */}
        <div className="border rounded-lg shadow-lg p-6 text-center bg-white">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Free</h2>
          <p className="text-gray-600 mb-6">Ideal for testing your bots with basic features.</p>
          <p className="text-4xl font-bold mb-4">₹0 <span className="text-base">/ month</span></p>
          <button 
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600" 
            onClick={() => selectPlan('free')}>
            Choose Free Plan
          </button>
        </div>

        {/* Basic Plan */}
        <div className="border rounded-lg shadow-lg p-6 text-center bg-white">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Basic</h2>
          <p className="text-gray-600 mb-6">Perfect for small bots with extended features.</p>
          <p className="text-4xl font-bold mb-4">₹500 <span className="text-base">/ month</span></p>
          <button 
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600" 
            onClick={() => selectPlan('basic')}>
            Choose Basic Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border rounded-lg shadow-lg p-6 text-center bg-white">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Premium</h2>
          <p className="text-gray-600 mb-6">For advanced bots with all premium features.</p>
          <p className="text-4xl font-bold mb-4">₹1000 <span className="text-base">/ month</span></p>
          <button 
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600" 
            onClick={() => selectPlan('premium')}>
            Choose Premium Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
