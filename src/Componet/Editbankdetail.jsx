import React, { useState } from "react";

const Editbankdetail = ({ setActiveSection }) => {
  const [form, setForm] = useState({
    accountHolder: "",
    bankName: "",
    accountNo: "",
    ifsc: "",
    branchName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Bank Details:", form);
    alert("Bank details updated successfully!");
  };

  const handleCancel = () => {
    setForm({
      accountHolder: "",
      bankName: "",
      accountNo: "",
      ifsc: "",
      branchName: "",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-2">

      <div className="relative w-[90%] sm:w-[50%] md:w-[35%] bg-white p-6 rounded-xl shadow-md">

        {/* ❌ Close Button */}
        <button
          onClick={() => setActiveSection(null)}
          className="absolute right-4 top-4 text-gray-600 text-xl hover:text-red-500"
        >
          ✕
        </button>

        <h1 className="text-xl font-bold mb-4 text-gray-800">
          Edit Bank Details
        </h1>

        {/* ACCOUNT HOLDER */}
        <label className="text-gray-700 text-sm">Account Holder</label>
        <input
          type="text"
          name="accountHolder"
          value={form.accountHolder}
          onChange={handleChange}
          placeholder="Account Holder Name"
          className="w-full mt-1 mb-3 p-2.5 border rounded-lg bg-gray-50 text-sm"
        />

        {/* BANK NAME */}
        <label className="text-gray-700 text-sm">Bank Name</label>
        <input
          type="text"
          name="bankName"
          value={form.bankName}
          onChange={handleChange}
          placeholder="Bank Name"
          className="w-full mt-1 mb-3 p-2.5 border rounded-lg bg-gray-50 text-sm"
        />

        {/* ACCOUNT NUMBER */}
        <label className="text-gray-700 text-sm">Account Number</label>
        <input
          type="number"
          name="accountNo"
          value={form.accountNo}
          onChange={handleChange}
          placeholder="Account Number"
          className="w-full mt-1 mb-3 p-2.5 border rounded-lg bg-gray-50 text-sm"
        />

        {/* IFSC */}
        <label className="text-gray-700 text-sm">IFSC Code</label>
        <input
          type="text"
          name="ifsc"
          value={form.ifsc}
          onChange={handleChange}
          placeholder="IFSC Code"
          className="w-full mt-1 mb-3 p-2.5 border rounded-lg bg-gray-50 text-sm"
        />

        {/* BRANCH NAME */}
        <label className="text-gray-700 text-sm">Branch Name</label>
        <input
          type="text"
          name="branchName"
          value={form.branchName}
          onChange={handleChange}
          placeholder="Branch Name"
          className="w-full mt-1 mb-4 p-2.5 border rounded-lg bg-gray-50 text-sm"
        />

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-2.5 rounded-lg text-sm hover:bg-green-700"
          >
            Update
          </button>

          <button
            onClick={handleCancel}
            className="w-full bg-red-500 text-white py-2.5 rounded-lg text-sm hover:bg-red-600"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default Editbankdetail;
