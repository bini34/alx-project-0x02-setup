import React from "react";
import { PostProps } from "../../interfaces/index";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div className="bg-white shadow rounded p-4 mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 mb-2">{content}</p>
    <span className="text-xs text-gray-500">User ID: {userId}</span>
  </div>
);

export default PostCard;
