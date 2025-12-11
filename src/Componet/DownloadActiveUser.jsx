import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const DownloadActiveUser = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 md:p-8 flex justify-center">

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Download Active Users
          </h1>

          {/* DOWNLOAD BUTTON */}
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl shadow-lg active:scale-95">
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download CSV
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search active users..."
            className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-50"
          />
        </div>

        {/* TABLE */}
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left min-w-[650px]">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">User ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Joining Date</th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              {/* EMPTY STATE */}
              <tr>
                <td colSpan="5" className="text-center py-8 text-slate-500">
                  No Active Records Found...
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default DownloadActiveUser;
