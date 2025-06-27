import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserById } from "../api/users";
import Loader from "../components/Loader";

export default function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserById(id)
      .then(setUser)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader text="Loading user..." />;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!user) return <div className="text-center mt-8">User not found.</div>;

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white shadow rounded p-6">
      <Link to="/" className="text-blue-500 hover:underline">
        &larr; Back to Users
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-gray-900">
        {user.name}
      </h1>
      <p className="mb-1 text-gray-900">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="mb-1 text-gray-900">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="mb-1 text-gray-900">
        <span className="font-semibold">Website:</span> {user.website}
      </p>
      <p className="mb-1 text-gray-900">
        <span className="font-semibold">Company:</span> {user.company?.name}
      </p>
      <p className="mb-1 text-gray-900">
        <span className="font-semibold">Address:</span> {user.address?.street},{" "}
        {user.address?.city}
      </p>
    </div>
  );
}
