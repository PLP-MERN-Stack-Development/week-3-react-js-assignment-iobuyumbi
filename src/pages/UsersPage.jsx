import React, { useState, useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import UserCard from "../components/UserCard";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import AddUserForm from "../components/AddUserForm";
import Pagination from "../components/Pagination";

const USERS_PER_PAGE = 5;

export default function UsersPage() {
  const { users: fetchedUsers, loading, error } = useUsers();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  function handleAddUser(newUser) {
    setUsers([newUser, ...users]);
    setCurrentPage(1); // Go to first page when a new user is added
  }

  // Pagination logic
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIdx = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIdx, startIdx + USERS_PER_PAGE);

  function handlePrev() {
    setCurrentPage((p) => Math.max(1, p - 1));
  }
  function handleNext() {
    setCurrentPage((p) => Math.min(totalPages, p + 1));
  }

  if (loading) return <Loader text="Loading users..." />;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 min-h-[80vh]">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-900">
        User List
      </h1>
      <AddUserForm onAddUser={handleAddUser} />
      {currentUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => navigate(`/users/${user.id}`)}
        />
      ))}
      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
