import React, { useState } from 'react';

const TermConditions = ({ onClose, onProceed }) => {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
  };

  const handleProceed = () => {
    if (accepted) {
      onProceed();
    } else {
      alert("Please accept the terms and conditions to proceed.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Terms and Conditions</h2>
        <p className="text-gray-600 mb-4">
          Please read and accept the terms and conditions before proceeding with the payment.
        </p>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={accepted}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-gray-700">I accept the terms and conditions</label>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
            Close
          </button>
          <button
            onClick={handleProceed}
            className={`py-2 px-4 rounded ${accepted ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-300 text-gray-500'}`}
            disabled={!accepted}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermConditions;
