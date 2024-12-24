import React, { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import SummaryApi from "../clien-side/src/common";
import { toast } from "react-toastify";
import AdminProduct from "../components/AdminProduct";

const Products = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const fetchProducts = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await fetchProducts.json();
    setAllProduct(dataResponse?.data || []);
    //  if(dataResponse.success){
    //   toast.success(dataResponse.message)
    //  }
    //  if(dataResponse.error){
    //   toast.error(dataResponse.message)
    //  }
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Product</h2>
        <button
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all rounded-full py-1 px-3"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>
      <div className="flex items-start flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allProduct.map((product, index) => {
          // console.log(product);
          return (
             <AdminProduct data={product} key={index + "allProduct"} fetchData={fetchAllProduct} />
          );
        })}
      </div>
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchAllProduct} />
      )}
    </div>
  );
};

export default Products;
