import React from "react";
import { UserProps } from "../../interfaces/index";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="bg-white shadow rounded p-4 mb-4">
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p className="text-gray-700 mb-1">Email: {email}</p>
    <p className="text-gray-700">Address: {address}</p>
  </div>
);

export default UserCard;
