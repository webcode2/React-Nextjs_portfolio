import React from "react";
import NewPost from "./NewPost";

export default function NewPostModal() {
  return <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <NewPost?>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
}