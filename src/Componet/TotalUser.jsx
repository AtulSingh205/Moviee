import React from "react";
import { FiDownload, FiUsers } from "react-icons/fi";

const TotalUser = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3">
            <FiUsers className="text-blue-600 text-3xl" />
            Total Users
          </h1>

          {/* Download Button */}
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-md transition-all"
          >
            <FiDownload className="text-lg" />
            Download Users
          </button>
        </div>

        {/* TABLE CONTAINER */}
        <div className="overflow-x-auto rounded-xl border border-gray-300 shadow-md">
          <table className="w-full text-left text-gray-700">
            <thead className="bg-gray-200 text-gray-800">
              <tr className="text-sm md:text-base">
                <th className="p-3 md:p-4">#</th>
                <th className="p-3 md:p-4">Name</th>
                <th className="p-3 md:p-4">Email</th>
                <th className="p-3 md:p-4">Joining Date</th>
                <th className="p-3 md:p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {/* No Record Found */}
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500 text-lg"
                >
                  No Total User Records Found...
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default TotalUser;
