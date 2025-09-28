import React, { useState } from "react";

interface PostModalProps {
  onAdd: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title, content);
    setTitle("");
    setContent("");
    setOpen(false);
  };

  return (
    <>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setOpen(true)}
      >
        Add Post
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow w-80">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-2 px-2 py-1 border rounded"
                required
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full mb-2 px-2 py-1 border rounded"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
