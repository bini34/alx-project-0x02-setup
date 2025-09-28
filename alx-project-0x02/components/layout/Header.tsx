import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4 flex gap-6">
    <Link href="/home" className="hover:underline">Home</Link>
    <Link href="/about" className="hover:underline">About</Link>
    <Link href="/posts" className="hover:underline">Posts</Link>
    <Link href="/users" className="hover:underline">Users</Link>
  </header>
);

export default Header;
