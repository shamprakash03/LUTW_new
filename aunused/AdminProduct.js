import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../clien-side/src/helpers/displayCurrency.js";

const AdminProduct = ({ data, fetchData }) => {
  // console.log(data);
  const [editProduct, setEditProduct] = useState();

  return (
    <div className="bg-white p-4 rounded">
      <div className="w-40">
        <div className="w-32 h-32 flex justify-center items-center pl-7">
        <img
          src={data?.productImage[0]}
          width={120}
          height={120}
          className="mx-auto object-contain h-full"
        />
        </div>
       
       
        <h1 className="text-ellipsis line-clamp-2">{data?.productName}</h1>
        <div>
          <p className="font-semibold">
            {
              displayINRCurrency(data?.selling)
            }
          </p>
        <div
          className="w-fit ml-auto border p-2 rounded bg-yellow-300 hover:bg-yellow-400 cursor-pointer"
          onClick={() => setEditProduct(true)}
        >
          <MdModeEditOutline />
        </div>
        </div>
        
        
      </div>
      {editProduct && (
        <AdminEditProduct
          dataName={data}
          onClose={() => setEditProduct(false)}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default AdminProduct;
