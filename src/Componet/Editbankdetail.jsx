import React, { useState } from "react";

const EditbankDetail = ({ onClose }) => {
  const [form, setForm] = useState({
    accountHolder: "",
    bankName: "",
    accountNo: "",
    ifsc: "",
    branchName: "",
  });

  // input change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit
  const handleSubmit = () => {
    console.log("Bank Details:", form);
    alert("✅ Bank details updated successfully!");
    onClose(); // close after submit
  };

  // cancel
  const handleCancel = () => {
    setForm({
      accountHolder: "",
      bankName: "",
      accountNo: "",
      ifsc: "",
      branchName: "",
    });
    onClose(); // close on cancel
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          ✕
        </button>

        {/* TITLE */}
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Edit Bank Details
        </h1>

        {/* FORM */}
        <div className="space-y-4">

          <Input
            label="Account Holder"
            name="accountHolder"
            value={form.accountHolder}
            onChange={handleChange}
            placeholder="Account Holder Name"
          />

          <Input
            label="Bank Name"
            name="bankName"
            value={form.bankName}
            onChange={handleChange}
            placeholder="Bank Name"
          />

          <Input
            label="Account Number"
            name="accountNo"
            value={form.accountNo}
            onChange={handleChange}
            placeholder="Account Number"
            type="number"
          />

          <Input
            label="IFSC Code"
            name="ifsc"
            value={form.ifsc}
            onChange={handleChange}
            placeholder="IFSC Code"
          />

          <Input
            label="Branch Name"
            name="branchName"
            value={form.branchName}
            onChange={handleChange}
            placeholder="Branch Name"
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-3">
          <button
            className="flex-1 bg-green-600 text-white py-2.5 rounded-xl hover:bg-green-700"
            onClick={handleSubmit}
          >
            Update
          </button>

          <button
            className="flex-1 bg-gray-200 text-gray-800 py-2.5 rounded-xl hover:bg-gray-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/* REUSABLE INPUT */
const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className="w-full mt-1.5 p-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default EditbankDetail;
