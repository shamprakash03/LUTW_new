import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../clien-side/src/common";
import Context from "../clien-side/src/context";
import { FaMinus, FaPlus } from "react-icons/fa6";
import displayINRCurrency from "../helpers/displayCurrency";
import { MdDelete} from 'react-icons/md'

const AddToCart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  // console.log("AddToCart", context.cartProductCount);
  const loadingCart = new Array(context.cartProductCount).fill(null);

  const fetchData = async () => {
    // setLoading(false);
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (responseData.success) {
      setData(responseData.data);
      // setLoading(false);
    }
  };
  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });
    const responseData = await response.json();
    if (responseData.success) {
      fetchData();
    }
  };
  const decreaseQty = async (id, qty) => {
    if( qty >= 2){
      const response = await fetch(SummaryApi.updateCartProduct.url, {
        method: SummaryApi.updateCartProduct.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        fetchData();
      }
    }
   
  };
  const handleDeleteCartProduct = async(id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });
    const responseData = await response.json();    
    if(responseData.success) {
      fetchData();
      context.fetchUserAddToCount()
    }
  }
  const handleLoading = async() => {
    await fetchData();
  }
  useEffect(() => {
    setLoading(true)
   handleLoading()
   setLoading(false)
  }, []);
  // console.log("Success",data);
  const totalQty = data.reduce((prevValue, currValue) => prevValue + currValue.quantity,0)
  const totalPrice = data.reduce((prev, curr) => prev + (curr.quantity * curr?.productId?.selling),0)
  return (
    <div className=" container mx-auto">
      <div className=" text-center text-lg my-3">
        {data.length === 0 && !loading && (
          <p className=" bg-white py-5">No Cart Product</p>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
        <div className=" w-full max-w-3xl">
          {loading
            ? loadingCart.map((el,index) => {
                return (
                  <div
                    key={el + "Add To Cart Loading" + index}
                    className=" w-full bg-slate-200 h-32 my-2 border border-slate-200 animate-pulse rounded"
                  ></div>
                );
              })
            : data.map((product, index) => {
                // console.log(product);
                return (
                  <div
                    key={product?._id + "Add To Cart Loading"}
                    className=" w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]"
                  >
                    <div className=" w-32 h-32 bg-slate-200">
                      <img
                        src={product?.productId?.productImage[0]}
                        className=" w-full h-full object-scale-down mix-blend-multiply"
                      />
                    </div>
                    <div className=" px-4 py-2 relative">
                      <div className=" absolute right-0 text-red-600 rounded-full p-2 bg-white hover:bg-red-600 hover:text-white cursor-pointer transition-all"
                      onClick={() => handleDeleteCartProduct(product?._id)}>
                        <MdDelete />
                      </div>
                      <h2 className=" text-lg lg:text-xl text-ellipsis line-clamp-1">
                        {product?.productId?.productName}
                      </h2>
                      <p className=" capitalize text-slate-500">
                        {product?.productId?.category}
                      </p>
                      <div className="flex items-center justify-between">
                      {/* 14.21 */}
                      <p className=" text-red-500 font-medium text-lg">
                        {displayINRCurrency(product?.productId?.selling)}
                      </p>
                      <p className="text-slate-600 font-medium">{displayINRCurrency(product?.productId?.selling * product.quantity)}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <button className="p-1 border border-red-600 text-red-600 hover:bg-red-700 hover:text-white rounded w-6 h-6 flex justify-center items-center"  onClick={() =>
                            decreaseQty(product?._id, product?.quantity)
                          }>
                          <FaMinus />
                        </button>
                        <span>{product?.quantity}</span>
                        <button
                          className="p-1 border border-red-600 text-red-600 hover:bg-red-700 hover:text-white rounded w-6 h-6 flex justify-center items-center"
                          onClick={() =>
                            increaseQty(product?._id, product?.quantity)
                          }
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className=" mt-5 lg:mt-0 w-full max-w-sm">
          {loading ? (
            <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
          ) : (
            <div className="h-36 bg-white">
              <h2 className=" bg-black text-white px-4 py-1">Summary</h2>
              <div className=" flex items-center justify-between gap-2 px-4 py-2 font-medium text-lg text-slate-500">
                <p>Quantity :</p>
                <p>{totalQty}</p>
              </div>
              <div className=" flex items-center justify-between gap-2 px-4 py-2 font-medium text-lg text-slate-500"> 
                <p>Total Price :</p>
                <p>{displayINRCurrency(totalPrice)}</p>
              </div>
              <button className=" bg-blue-600 text-white p-2 w-full">Payment</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
