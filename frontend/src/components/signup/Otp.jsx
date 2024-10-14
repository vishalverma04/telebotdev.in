import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OTPPage() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleOTPSubmit = (e) => {
    e.preventDefault();

    // Hardcoded OTP for demonstration, replace with your OTP logic
    const correctOtp = '123456';

    if (otp === correctOtp) {
      // Redirect to the Home Page after successful OTP verification
      alert('OTP Verified Successfully');
      navigate('/home'); // Redirect to Home Page
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">OTP Verification</h2>

        <p className="text-center mb-4">We have sent an OTP to your email: {email}</p>

        <form onSubmit={handleOTPSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength="6"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default OTPPage;
