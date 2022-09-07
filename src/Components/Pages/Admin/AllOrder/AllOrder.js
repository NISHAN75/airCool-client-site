import React, { useState } from "react";
import { Td, Tr } from "react-super-responsive-table";

const AllOrder = ({ order, index, setRemoveOrder }) => {
  const{_id} = order;
  console.log(order)
  const [processing, setProcessing] = useState(false);
  const deleveredHandle =(transactionId)=>{
    const payment = {
      order: _id,
      transactionId: transactionId,
      shipment: "delevered",
    };
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        setProcessing(false);
      });
  }

  return (
    <Tr className="p-20 border-b-4  border-primary">
      <Td className="p-5 text-primary font-bold">{index + 1}</Td>
      <Td className="p-5 text-primary font-bold">{order?.user}</Td>
      <Td className="p-5 text-primary font-bold">{order?.partName}</Td>
      <Td className="p-5 text-primary font-bold">{order?.userPhone}</Td>
      <Td className="p-5 text-primary font-bold">{order?.quantity}</Td>
      <Td className="p-5 text-primary font-bold">${order?.pay}</Td>
      
      <Td>
        {!order?.paid && (
          <label
            htmlFor="order-delete-conform"
            className="btn  bg-primary hover:bg-white hover:text-black px-10 mt-2"
          >
            Panding
          </label>
        )}
        {order?.shipment === "shifting" && (
          <label
            onClick={()=>deleveredHandle(order.transactionId)}
            htmlFor="order-delete-conform"
            className="btn  bg-primary hover:bg-white hover:text-black px-10 mt-2"
          >
            {order?.shipment}
          </label>
        )}
        {order?.shipment === "delevered" && (
          <p
            className="bg-primary text-white  p-5 mt-2"
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
            className="btn  bg-red-500 hover:bg-white hover:text-black px-10 mt-2"
          >
            Delete
          </label>
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
    </Tr>
  );
};

export default AllOrder;