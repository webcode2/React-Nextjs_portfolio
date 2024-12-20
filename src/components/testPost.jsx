import React from "react";
import { GiDogBowl, GiDogHouse } from "react-icons/gi";
import { GoReply } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiPawPrintThin } from "react-icons/pi";
import Avatar from "./socials/Avatar";
import Image from "next/image";

const PostFeed = ({ post }) => {
  const displayedMedia = post.content.media.slice(0, 4); // Show up to 4 media items
  const remainingCount =
    post.content.media.length > 4 ? post.content.media.length - 4 : 0;
  const size = 25;

  
  return (
    <div className="w-full border-t ">
      <div className="max-w-xl mx-auto ">
        <div className="p-2">
          {/* Post Header */}
          <div className="flex items-center mt-8 mb-5">
            <div className="flex flex-1 gap-x-3">
              <Avatar imgUrl={post.meta.avatar} />
              <div className="">
                <h3 className="text-lg font-semibold">{post.meta.username}</h3>
                <p className="text-gray-500 text-sm">
                  {new Date(post.meta.timestamp).toDateString()}
                </p>
              </div>
            </div>
            <div className="option">
              <IoEllipsisVertical />
            </div>
          </div>

          {/* Media Content */}
          <div
            className={`grid gap-1 ${
              displayedMedia.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {displayedMedia.map((item, index) => (
              <div
                key={index}
                className={`relative w-full ${
                  displayedMedia.length === 1 ? "w-full" : "w-full"
                } overflow-hidden rounded-lg`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={`Media ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    controls
                  />
                )}
                {/* Overlay for the last item */}
                {index === 3 && remainingCount > 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Post Content */}
          <p className="text-gray-800 mt-6 font-medium  font-sans text-lg">
            This is an example post description with media content below. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Magni, sapiente
            recusandae reprehenderit id minus vitae, sint quod totam blanditiis
            aut ab nihil explicabo ea labore tempore corporis exercitationem
            voluptatem expedita!
          </p>
          {/* post actions */}

          <div className="post_action mt-10 flex justify-between mb-5">
            <PiPawPrintThin size={size} />

            <IoIosHeartEmpty size={size} />
            <GiDogBowl size={size} />
            <GoReply size={size} />
            <GiDogHouse size={size} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
