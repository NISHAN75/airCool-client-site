import React from "react";
import { toast } from "react-toastify";

const OrderDelete = ({ setRemoveOrder, setOrders, removeOrder, orders }) => {
  console.log(removeOrder);

  const { userEmail, partName } = removeOrder;
  const handleDelete = (partId) => {
    console.log("click", partId);
    const url = `http://localhost:5000/orders?email=${removeOrder.userEmail}`;
    console.log(url);

    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("hi");
          const remaining = orders.filter((order) => order.partId !== partId);
          toast.success(
            <p className="text-primary">Delete Successfully</p>
          );
          setRemoveOrder(null);
          setOrders(remaining);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="order-delete-conform"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are You Sure You Want to Delete
            <br /> <span className="text-green-500">{partName}</span>?
          </h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(removeOrder.partId)}
              className="btn bg-red-500  hover:bg-white hover:text-black px-10"
            >
              Delete
            </button>
            <label
              htmlFor="order-delete-conform"
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

export default OrderDelete;