import React from "react";

export default function UserCard({ user, onClick }) {
  return (
    <div
      className="bg-white shadow rounded p-2 mb-2 cursor-pointer hover:bg-blue-50 transition"
      onClick={onClick}
    >
      <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
      <p className="text-gray-800">{user.email}</p>
      <p className="text-gray-700 text-sm">{user.company?.name}</p>
    </div>
  );
}
