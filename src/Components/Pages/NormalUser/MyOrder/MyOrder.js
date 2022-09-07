import React from "react";
import { Link } from "react-router-dom";
import { Tr, Td } from "react-super-responsive-table";

const MyOrder = ({ order, index, setRemoveOrder }) => {
  return (
    <Tr className="p-20 border-b-4  border-primary text-center">
      <Td className="p-5 text-primary font-bold">{index + 1}</Td>
      <Td className="p-5 text-primary font-bold">{order?.user}</Td>
      <Td className="p-5 text-primary font-bold">{order?.partName}</Td>
      <Td className="p-5 text-primary font-bold">{order?.userPhone}</Td>
      <Td className="p-5 text-primary font-bold">{order?.quantity}</Td>
      <Td className="p-5 text-primary font-bold">${order?.pay}</Td>
      <Td className="p-5 ">
        {order?.pay && !order?.paid && (
          <Link to={`/dashborad/payment/${order?._id}`}>
            <button className="btn btn-active  bg-primary hover:bg-white hover:text-black px-10">
              pay
            </button>
          </Link>
        )}
        {order?.pay && order?.paid && (
          <div>
            <span className="text-primary font-bold">Paid</span>
            <p className="text-primary font-bold">
              Transaction id:
              <br />
              <span className="text-primary font-bold">{order?.transactionId}</span>
            </p>
          </div>
        )}
      </Td>
      <Td className="p-5 ">
      {!order?.paid && (
          <label
            htmlFor="order-delete-conform"
            className="btn  bg-primary hover:bg-white hover:text-black px-10 mt-2"
          >
            Panding
          </label>
        )}
      {order?.shipment === "shifting" && (
          <p className="btn  bg-primary hover:bg-white hover:text-black px-10 mt-2"
          >
            {order?.shipment}
          </p>
        )}
        {order?.shipment === "delevered" && (
          <p
          className="bg-primary text-white  p-2 mt-2"
          >
            Deleverd parts Successfully
          </p>
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