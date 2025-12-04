import React, { useState } from 'react';

const ChangePassword = ({ setActiveSection }) => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  // Submit handler
  const handleSubmit = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    if (passwords.newPassword.length < 6) {
      alert("❌ Password must be at least 6 characters!");
      return;
    }

    console.log("Updated Password:", passwords.newPassword);
    alert("✔ Password updated successfully!");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 relative">

      {/* Close Button */}
      <button
        onClick={() => setActiveSection(null)}
        className="absolute top-6 right-6 text-gray-600 hover:text-red-600 text-3xl font-bold"
      >
        ✕
      </button>

      <div className="w-[90%] sm:w-[50%] md:w-[35%] bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="font-bold text-2xl mb-6">Change Your Password</h1>

        {/* New Password */}
        <label className="text-gray-700 font-medium">New Password</label>
        <input
          type="password"
          name="newPassword"
          value={passwords.newPassword}
          onChange={handleChange}
          placeholder="Enter new password"
          className="w-full mt-2 mb-5 p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Confirm Password */}
        <label className="text-gray-700 font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="w-full mt-2 p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Submit Button */}
        <button
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
