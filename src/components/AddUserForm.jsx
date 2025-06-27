import React, { useState } from "react";

export default function AddUserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !company) {
      setError("All fields are required.");
      return;
    }
    onAddUser({
      id: Date.now(),
      name,
      email,
      company: { name: company },
    });
    setName("");
    setEmail("");
    setCompany("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white shadow rounded p-2">
      <h2 className="text-lg font-bold mb-2 text-gray-900">Add New User</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-2 space-y-2">
        <div className="flex items-center">
          <label htmlFor="name" className="w-24 text-gray-800 font-medium">
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="w-24 text-gray-800 font-medium">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="company" className="w-24 text-gray-800 font-medium">
            Company:
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add User
      </button>
    </form>
  );
}
