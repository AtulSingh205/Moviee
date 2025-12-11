import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const DownloadInactiveUser = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 sm:p-6 lg:p-10 flex justify-center">
      
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-5 sm:p-7 lg:p-10">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Download Inactive Users
          </h1>

          {/* DOWNLOAD BUTTON */}
          <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-black transition-all shadow-md active:scale-95">
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span className="text-sm sm:text-base">Download</span>
          </button>
        </div>

        {/* TABLE CONTAINER */}
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-300 shadow-sm">
          
          {/* Ensure responsive width */}
          <table className="w-full min-w-[650px] text-left text-sm md:text-base">
            
            {/* TABLE HEAD */}
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">User ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Joining Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            {/* EMPTY DATA UI */}
            <tbody>
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-10 text-slate-500 text-sm sm:text-base"
                >
                  🚫 No Inactive User Found...
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default DownloadInactiveUser;
