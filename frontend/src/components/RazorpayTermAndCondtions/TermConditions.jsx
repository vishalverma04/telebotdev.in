import React, { useState } from 'react';

const TermsConditions = ({ onClose, onAccept }) => {
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  const handleAccept = () => {
    if (isChecked) {
      onAccept(); // Call onAccept if checked
      onClose(); // Close the modal
    } else {
      alert("Please accept the terms and conditions before proceeding."); // Alert if not checked
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
        <p className="mb-4">
          By using this payment service, you agree to the following terms and conditions:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Payments are processed through Razorpay.</li>
          <li>All transactions are secure and encrypted.</li>
          <li>No refunds will be provided once the payment is made.</li>
          <li>You are responsible for maintaining the confidentiality of your payment information.</li>
          <li>Razorpay reserves the right to change their terms and conditions at any time.</li>
        </ul>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label>I accept the Terms and Conditions</label>
        </div>
        <button
          onClick={handleAccept}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Proceed to Pay
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsConditions;
