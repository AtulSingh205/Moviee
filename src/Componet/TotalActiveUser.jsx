import React from "react";

const TotalActiveUser = () => {
  const users = []; // <-- yaha data aayega backend se

  return (
    <div className="p-5 md:p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-200">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-6">
          My Direct Team
        </h1>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-xl border border-gray-300">
          <table className="w-full border-collapse">
            <thead className="bg-indigo-600 text-white text-sm md:text-base">
              <tr>
                <th className="p-3 text-left">SR No</th>
                <th className="p-3 text-left">User ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Joining Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="p-6 text-center text-gray-500 italic"
                  >
                    No Records Found...
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{user.userId}</td>
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.joiningDate}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm text-white ${
                          user.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalActiveUser;
