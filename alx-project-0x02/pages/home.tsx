import React from "react";
import Card from "../components/common/Card";
import Header from "../components/layout/Header";
import PostModal from "../components/common/PostModal";

export default function Home() {
  const [posts, setPosts] = React.useState([
    { title: "First Card", content: "This is the first card." },
    { title: "Second Card", content: "This is the second card." },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <Card title="First Card" content="This is the first card." />
        <Card title="Second Card" content="This is the second card." />
        <div className="mt-4">
          <PostModal onAdd={handleAddPost} />
        </div>
        <div className="mt-4">
          {posts.map((post, idx) => (
            <Card key={idx} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </>
  );
}
