"use client";
import React, { useEffect, useState } from "react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { CiCalendarDate, CiImageOn, CiVideoOn } from "react-icons/ci";
import Avatar from "./Avatar";
import PostFeed from "components/testPost";
import Image from "next/image";

export default function NewPost({ avatar }) {
  const [inputVisible, setInputVisible] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [newPostMedia, setnewPostMedia] = useState([]);
  let remainingCount = 0;

  const handleNewPostFocus = () => setInputVisible(!inputVisible);
  const handleImageUpload = (e) => {
    const files = Object.values(e.target.files);

    if (files.length) {
      remainingCount = files.length > 4 ? files.length - 4 : 0;
      alert(remainingCount);
      setnewPostMedia((prev) => [...prev, ...files]);
    }
  };

  const handleNewPostTextInput = (e) => setNewPost(e.value);
  const handleIfPostInpuShoudBeHidden = () => {
    if (newPost.trim().length) {
      alert("save post or leave to discard it");
      return;
    }
    setInputVisible(false);
  };
  useEffect(() => {
    return () => {
      if (newPostMedia.length) {
        newPostMedia.map((file) => {
          URL.revokeObjectURL(file);
        });
      }
    };
  }, [newPostMedia]);

  return (
    <div className="newPost border rounded-lg my-3 shadow-md flex  gap-x-6 px-10 py-10 items-start ">
      <Avatar imgUrl={avatar} />
      <div className=" flex-1">
        <div className=" text-gray-400 font-semibold text-2xl f">
          {!inputVisible && (
            <p onClick={handleNewPostFocus}> What&rsquo;s your pet up to...</p>
          )}
        </div>
        {newPostMedia.length > 0 && (
          <div
            className={`grid gap-1 ${
              newPostMedia.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {newPostMedia.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative w-full overflow-hidden rounded-lg`}
                >
                  <Image
                    src={URL.createObjectURL(item)}
                    alt={`Media ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    controls
                  /> */}
                  {/* } */}
                  {/* Overlay for the last item */}
                  {index === 3 && remainingCount >= 1 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        +{remainingCount}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {inputVisible && (
          <div className="text_area ">
            <textarea
              id="message"
              autoFocus
              onChange={handleNewPostTextInput}
              name="message"
              onBlur={handleIfPostInpuShoudBeHidden}
              placeholder="What's your pet upto..."
              value={newPost}
              rows="4"
              className="block w-full rounded-md text-lg  focus:outline-none resize-none"
            ></textarea>
          </div>
        )}
        <div className="media_types border-t mt-6 pt-3 flex justify-between items-center ">
          <div className="left flex gap-x-4">
            <label for="file-upload" className="cursor-pointer">
              <CiImageOn />
            </label>
            <input
              onChange={handleImageUpload}
              id="file-upload"
              name="file-upload"
              accept="image/*"
              type="file"
              className="hidden"
              multiple
            />
            <CiVideoOn />
            <BsEmojiHeartEyes />
            <CiCalendarDate />
          </div>
          <div className="btn ">
            <button
              type="submit"
              className="btn px-8 text-lg btn-primary rounded-xl text-white"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
