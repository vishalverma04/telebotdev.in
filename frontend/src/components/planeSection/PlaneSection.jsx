// import React from 'react';

// const PlansPage = () => {
//   return (
//     <div className="container mx-auto py-12 px-6">
//       <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Choose Your Plan</h1>
//       <p className="text-center text-gray-600 mb-12 text-xl">
//         Compare the features of our Free, Basic, and Premium plans, and pick the one that’s right for you.
//       </p>

//       {/* Plan Comparison Table */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Free Plan */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">Free Plan</h2>
//           <p className="text-gray-600 mb-6 text-center">
//             Ideal for small-scale bots with basic functionality.
//           </p>
//           <ul className="list-disc list-inside text-gray-700 mb-6">
//             <li>Responds to basic user questions</li>
//             <li>Supports up to 100 users</li>
//             <li>No admin dashboard access</li>
//             <li>No broadcasting features</li>
//             <li>Basic support</li>
//           </ul>
//           <div className="text-center">
//             <p className="text-2xl font-bold text-gray-900 mb-4">Free</p>
//             <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
//               Get Started
//             </button>
//           </div>
//         </div>

//         {/* Basic Plan */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">Basic Plan</h2>
//           <p className="text-gray-600 mb-6 text-center">
//             Best for bots needing file and message broadcasting capabilities.
//           </p>
//           <ul className="list-disc list-inside text-gray-700 mb-6">
//             <li>Responds to basic user questions</li>
//             <li>Broadcast messages/files to users/groups/channels</li>
//             <li>Supports up to 500 users</li>
//             <li>No admin dashboard access</li>
//             <li>Priority support</li>
//           </ul>
//           <div className="text-center">
//             <p className="text-2xl font-bold text-gray-900 mb-4">₹500/month</p>
//             <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
//               Get Started
//             </button>
//           </div>
//         </div>

//         {/* Premium Plan */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">Premium Plan</h2>
//           <p className="text-gray-600 mb-6 text-center">
//             Full access to admin dashboard and advanced bot management tools.
//           </p>
//           <ul className="list-disc list-inside text-gray-700 mb-6">
//             <li>Responds to basic and advanced user questions</li>
//             <li>Broadcast messages/files to users/groups/channels</li>
//             <li>Admin dashboard with bot statistics</li>
//             <li>See how many users connected</li>
//             <li>Track how many users in your database</li>
//             <li>Check how many users blocked your bot</li>
//             <li>Full control over bot behavior</li>
//             <li>Supports unlimited users</li>
//             <li>Premium support</li>
//           </ul>
//           <div className="text-center">
//             <p className="text-2xl font-bold text-gray-900 mb-4">₹1000/month</p>
//             <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlansPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlansPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // State to toggle between monthly and yearly
  const navigate = useNavigate();
  const isLoggedIn=true
  const handleGetStarted = (plan) => {
    if (isLoggedIn) {
      // Redirect to configure bot page if logged in
      navigate(`/configure-bot/${plan}`);
    } else {
      // Redirect to login page if not logged in
      navigate('/login');
    }
  };

  const monthlyPlans = {
    free: 0,
    basic: 500,
    premium: 1000,
  };

  const yearlyPlans = {
    basic: monthlyPlans.basic * 12 * 0.75, // 25% discount
    premium: monthlyPlans.premium * 12 * 0.75, // 25% discount
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Choose Your Plan</h1>
      <p className="text-center text-gray-600 mb-6 text-xl">
        Compare the features of our Free, Basic, and Premium plans, and pick the one that’s right for you.
      </p>

      {/* Toggle between Monthly and Yearly Pricing */}
      <div className="text-center mb-12">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`mr-4 ${billingCycle === 'monthly' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`${billingCycle === 'yearly' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
        >
          Yearly (25% Off)
        </button>
      </div>

      {/* Plan Comparison Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">Free Plan</h2>
          <p className="text-gray-600 mb-6 text-center">Ideal for small-scale bots with basic functionality.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Responds to basic user questions</li>
            <li>Supports up to 100 users</li>
            <li>No admin dashboard access</li>
            <li>No broadcasting features</li>
            <li>Basic support</li>
          </ul>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">Free</p>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600" onClick={() => handleGetStarted('free')}>
              Get Started
            </button>
          </div>
        </div>

        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">Basic Plan</h2>
          <p className="text-gray-600 mb-6 text-center">Broadcast to users, groups, and channels.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Broadcast messages/files</li>
            <li>Supports up to 500 users</li>
            <li>No admin dashboard access</li>
            <li>Priority support</li>
          </ul>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              {billingCycle === 'monthly' ? `₹${monthlyPlans.basic}/month` : `₹${Math.round(yearlyPlans.basic)}/year`}
            </p>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600" onClick={() => handleGetStarted('basic')}>
              Get Started
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">Premium Plan</h2>
          <p className="text-gray-600 mb-6 text-center">Full access to the admin dashboard and bot management.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Admin dashboard with full insights</li>
            <li>Unlimited users</li>
            <li>Bot statistics and controls</li>
            <li>Premium support</li>
          </ul>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              {billingCycle === 'monthly' ? `₹${monthlyPlans.premium}/month` : `₹${Math.round(yearlyPlans.premium)}/year`}
            </p>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600" onClick={() => handleGetStarted('premium')}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
