import React from "react";
import PostCard from "../components/common/PostCard";
import Header from "../components/layout/Header";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <div className="grid gap-4">
          {posts.map((post: any) => (
            <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
          ))}
        </div>
      </div>
    </>
  );
}
