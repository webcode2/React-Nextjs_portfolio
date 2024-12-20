import { IoChevronForwardSharp } from "react-icons/io5";
import ChatCard from "components/ChatCard";
import Post from "components/PostCard";
import PostFeed from "components/testPost";
import React from "react";

export default function Homepage() {
  let post = {
    meta: {
      avatar:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      username: "John Doe",
      timestamp: "2023-11-22 12:34:56",
    },
    content: {
      text: "This is the first post.",
      media: [
        { type: "image", src: "https://via.placeholder.com/150" },
        {
          type: "image",
          src: "https://pbs.twimg.com/media/Gent03nXYAAdAmJ?format=jpg&name=small",
        },
        { type: "video", src: "https://sample-videos.com/video123.mp4" },
        { type: "image", src: "https://via.placeholder.com/150" },
        { type: "image", src: "https://via.placeholder.com/150" },
      ],
    },
  };

  return (
    <div className="wrapper flex h-screen  max-w-7xl  mx-auto  mt-5 rounded -z-30 border-t ">
      <aside className="w-3/12 space-y-5 gap-y-8 overflow-auto px-5 border-l hidden lg:block">
      

        <button className="btn bg-transparent border-none shadow-none w-full text-lg hover:bg-neutral hover:bg-opacity-20">
          <div className="flex justify-between items-center w-full">
            <p className="text-start w-full">Shops</p>
            <IoChevronForwardSharp />
          </div>
        </button>

        <button className="btn w-full text-lg">
          <p className="text-start w-full">Posts</p>
        </button>
        <button className="btn w-full text-lg">
          <p className="text-start w-full">Market Place</p>
        </button>
        <button className="btn w-full text-lg">
          <p className="text-start w-full">Breeds</p>
        </button>
      </aside>

      <main className="lg:w-7/12 w-full lg:px-10 px-5">
        <div className="content border-x ">
          <PostFeed post={post} />
          <PostFeed post={post} />
          <PostFeed post={post} />
          <PostFeed post={post} />
          <PostFeed post={post} />
          <PostFeed post={post} />
        </div>
      </main>
      <div className="chat w-2/12 lg:block hidden ">
        <div className="users">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus libero illo deleniti.
        </div>
      </div>
    </div>
  );
}
