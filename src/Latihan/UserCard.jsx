import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city, ...rest } = props;
  const [clicked, setClicked] = useState(false);
  console.log(Object.entries(rest));


  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      {
        Object.entries(rest).map(([key, value]) => (
          <p key={key} className="text-gray-600">
            <span className="font-medium">{key}:</span> {value}
          </p>
        ))
      }

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