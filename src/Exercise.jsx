import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  const user = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      street: "Jl. Mawar No. 12",
      city: "Jakarta",
      age: 25,
    },
    {
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      street: "Jl. Melati No. 45",
      city: "Bandung",
    },
    {
      name: "Budi Santoso",
      email: "budi@gmail.com",
      street: "Jl. Merdeka No. 1",
      city: "Semarang",
    }
  ];
  // Filter hanya yang city bukan semarang
  const nonSemarangUser = user.filter((user) => user.city !== "Semarang");
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Card
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {user.map((user) => (
          <UserCard key={user.email} {...user} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;