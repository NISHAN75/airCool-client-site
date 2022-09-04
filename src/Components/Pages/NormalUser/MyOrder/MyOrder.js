import React from "react";
import { Link } from "react-router-dom";
import { Tr, Td } from "react-super-responsive-table";

const MyOrder = ({ order, index, setRemoveOrder }) => {
  return (
    <Tr className="p-20 hover:bg-primary hover:text-white font-bold border-b-4 border-primary">
      <Td className="p-5">{index + 1}</Td>
      <Td className="p-5">{order?.user}</Td>
      <Td className="p-5">{order?.partName}</Td>
      <Td className="p-5">{order?.userPhone}</Td>
      <Td className="p-5">{order?.quantity}</Td>
      <Td className="p-5">${order?.pay}</Td>
      <Td className="p-5">
        {order?.pay && !order?.paid && (
          <Link to={`/dashBoard/payment/${order?._id}`}>
            <button className="btn btn-active  bg-primary hover:bg-white hover:text-black px-10">
              pay
            </button>
          </Link>
        )}
        {order?.pay && order?.paid && (
          <div>
            <span className="text-secondary">Paid</span>
            <p>
              Transaction id:
              <br />
              <span className="text-secondary">{order?.transactionId}</span>
            </p>
          </div>
        )}
      </Td>
      <Td className="p-5">
        {!order?.paid && (
          <label
            onClick={() => setRemoveOrder(order)}
            htmlFor="order-delete-conform"
            className="btn  bg-red-500 hover:bg-white hover:text-black px-10"
          >
            Delete
          </label>
        )}
      </Td>
    </Tr>
  );
};

export default MyOrder;