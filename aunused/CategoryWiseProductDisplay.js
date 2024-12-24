import React, { useContext, useEffect, useRef, useState } from "react";
import fetchCategoryWiseProduct from "../clien-side/src/helpers/fetchCategoryWiseProduct";
import displayINRCurrency from "../clien-side/src/helpers/displayCurrency";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import addToCart from "../clien-side/src/helpers/addToCart";
import Context from "../clien-side/src/context";
import scrollTop from "../clien-side/src/helpers/scrollTop";

const CategoryWiseProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const { fetchUserAddToCount } = useContext(Context)

  const handleAddToCart = async (e,id) => {
    await addToCart(e,id)
    fetchUserAddToCount()
  }


  const fetchData = async () => {
    setLoading(true);
    const dataFetch = await fetchCategoryWiseProduct(category);
    setLoading(false);
    setData(dataFetch?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" container mx-auto px-4 my-6 relative">
      <h2 className=" text-2xl font-semibold py-2">{heading}</h2>
      <div
        className=" grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-x-scroll scrollbar-hidden transition-all"
      >
    
        {loading
          ? loadingList.map((product, index) => {
              return (
                <div className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow">
                  <div className=" bg-slate-200 h-44 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                  <div className=" p-4 grid gap-3">
                    <h2 className=" font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black rounded-full bg-slate-200 animate-pulse p-1 py-2"></h2>
                    <p className=" capitalize text-slate-500 rounded-full bg-slate-200 animate-pulse p-1 py-2"></p>
                    <div className="flex gap-3">
                      <p className=" text-red-500 font-medium rounded-full bg-slate-200 animate-pulse p-1 w-full py-2"></p>
                      <p className=" text-slate-500 line-through text-sm rounded-full bg-slate-200 animate-pulse p-1 w-full py-2"></p>
                    </div>
                    <button className=" text-white px-3 rounded-full bg-slate-200 animate-pulse p-1 w-full py-2"></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  to={"/product/" + product._id}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow"
                  onClick={scrollTop}
                >
                  <div className=" bg-slate-200 h-44 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
                    <img
                      src={product.productImage[0]}
                      className=" object-scale-down h-full hover:scale-125 transition-all mix-blend-multiply"
                    />
                  </div>
                  <div className=" p-4 grid gap-3">
                    <h2 className=" font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className=" capitalize text-slate-500">
                      {product?.category}
                    </p>
                    <div className="flex gap-3">
                      <p className=" text-red-500 font-medium">
                        {displayINRCurrency(product?.selling)}
                      </p>
                      <p className=" text-slate-500 line-through text-sm">
                        {displayINRCurrency(product?.price)}
                      </p>
                    </div>
                    <button
                      className=" bg-blue-600 hover:bg-blue-700 text-white px-3 py-0.5 rounded-full"
                      onClick={(e) =>handleAddToCart(e, product?._id)}
                    >
                      Add to cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default CategoryWiseProduct;

///export default VerticalCardProduct
