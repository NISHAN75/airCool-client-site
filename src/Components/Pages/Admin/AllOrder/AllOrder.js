import React from "react";
import { Td, Tr } from "react-super-responsive-table";

const AllOrder = ({ order, index, setRemoveOrder }) => {
  console.log(order);
  return (
    <Tr className="p-20 border-b-4  border-primary">
      <Td className="p-5 text-primary font-bold">{index + 1}</Td>
      <Td className="p-5 text-primary font-bold">{order?.user}</Td>
      <Td className="p-5 text-primary font-bold">{order?.partName}</Td>
      <Td className="p-5 text-primary font-bold">{order?.userPhone}</Td>
      <Td className="p-5 text-primary font-bold">{order?.quantity}</Td>
      <Td className="p-5 text-primary font-bold">${order?.pay}</Td>
      <Td className="p-5">
        {!order?.paid && (
          <label
            onClick={() => setRemoveOrder(order)}
            htmlFor="order-delete-conform"
            className="btn  bg-red-500 hover:bg-white hover:text-black px-10 mt-2"
          >
            Delete
          </label>
        )}
      </Td>
    </Tr>
  );
};

export default AllOrder;