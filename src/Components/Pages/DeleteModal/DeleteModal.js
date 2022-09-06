import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ removeUser, refetch, setRemoveUser }) => {
  const { email } = removeUser;
  const handleDelete = (email) => {
    const url = `http://localhost:5000/users/${removeUser.email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(
            <p className="text-primary">Remove This user successfully</p>
          );
          setRemoveUser(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-conform" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are You Sure You Want to delete {email} this user?
          </h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(removeUser.email)}
              className="btn bg-red-500  hover:bg-white hover:text-black"
            >
              Remove User
            </button>
            <label
              htmlFor="delete-conform"
              className="btn bg-green-500   hover:bg-white hover:text-black px-10"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;