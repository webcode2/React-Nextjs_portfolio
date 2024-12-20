import React from "react";
import NewPost from "./NewPost";
import { IoCloseOutline } from "react-icons/io5";

export default function NewPostModal() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <IoCloseOutline/>
          </button>
        </form>
        <NewPost />
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
}
