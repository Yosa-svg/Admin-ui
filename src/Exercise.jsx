import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { postData } from "./postData";

function Exercise() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = postData;
        setPosts(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
        Post Card
      </h1>
      <div className="grid md:grid-cols-5 lg:grid-cols-6 gap-7 max-w-10xl mx-auto">
        {posts.map(({ id, userId, title, body }) => (
          <PostCard key={id} id={id} userId={userId} title={title} body={body} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
