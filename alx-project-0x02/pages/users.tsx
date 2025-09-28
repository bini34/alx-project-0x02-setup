import React from "react";
import UserCard from "../components/common/UserCard";
import Header from "../components/layout/Header";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <div className="grid gap-4">
          {users.map((user: any) => (
            <UserCard key={user.id} name={user.name} email={user.email} address={user.address.street + ", " + user.address.city} />
          ))}
        </div>
      </div>
    </>
  );
}
