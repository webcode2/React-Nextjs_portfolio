"use client";
import { FaUser } from "react-icons/fa";
import PostFeed from "components/testPost";
import React, { useState } from "react";
import { GiSniffingDog } from "react-icons/gi";
import { GoComment } from "react-icons/go";
import { IoChevronForwardSharp } from "react-icons/io5";
import { CgFeed } from "react-icons/cg";

import { TfiShoppingCartFull } from "react-icons/tfi";
import { BsEmojiHeartEyes, BsShop } from "react-icons/bs";

import { CiCalendarDate, CiImageOn, CiShop, CiVideoOn } from "react-icons/ci";
import Avatar from "components/socials/Avatar";
import NewPost from "components/socials/NewPost";
import Aside from "components/socials/Aside";
import RightUserList from "components/socials/RightUserList";
import SocialsTopNav from "components/socials/SocialsTopNav";

const SocialHome = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

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
    <div className="relative flex lg:h-screen overflow-hidden ">
      {/* Sidebar */}
      <Aside />

      {/* Overlay */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}

      <main className="lg:h-screen md:w-9/12 lg:overflow-hidden px-3 bg-transparent">
        <div className="w-full container flex h-full ">
          <div className="md:w-8/12 h-full lg:overflow-auto  ">
            <SocialsTopNav toggleSidebar={toggleSidebar} main={true} />
            <div className="content">
              <NewPost avatar={post.meta.avatar} />
              <PostFeed post={post} />
              <PostFeed post={post} />
              <PostFeed post={post} />
            </div>
          </div>
          <div className="md:block hidden w-4/12 sticky h-screen overflow-y-auto ">
            <SocialsTopNav right={true} />
            <RightUserList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocialHome;
