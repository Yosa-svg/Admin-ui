import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      <button
        className={`mt-4 ${clicked ? "bg-special-green" : "bg-gray-400"} text-white p-2 rounded-md transition-colors`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;