import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../clien-side/src/common";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import displayINRCurrency from "../helpers/displayCurrency";
// import VerticalCardProduct from "../components/VerticalCardProduct";
import CategoryWiseProduct from "../components/CategoryWiseProductDisplay";
import addToCart from "../helpers/addToCart";
import Context from "../clien-side/src/context";

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    selling: "",
  });

  const params = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const productImageList = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const [zoomImageCoordinates, setZoomImageCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);
  const { fetchUserAddToCount } = useContext(Context);

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        productId: params?.id,
      }),
    });

    setLoading(false);
    const dataResponse = await response.json();

    setData(dataResponse?.data);
    setActiveImage(dataResponse?.data?.productImage[0]);
  };
  console.log("data", data);
  useEffect(() => {
    fetchProductDetails();
  }, [params]);
  const handleMouseEnterImage = (imageUrl) => {
    setActiveImage(imageUrl);
  };
  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setZoomImageCoordinates({
        x,
        y,
      });
    },
    [zoomImageCoordinates]
  );
  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCount();
  };
  const handleToBuy = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCount();
    navigate("/cart")
  };
  return (
    <div className=" container mx-auto p-4">
      <div className=" min-h-[200px] flex flex-col lg:flex-row gap-4">
        <div className=" h-96 flex flex-col lg:flex-row-reverse gap-4">
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative">
            <img
              src={activeImage}
              onMouseMove={handleZoomImage}
              onMouseLeave={handleLeaveImageZoom}
              className=" h-full w-full object-scale-down mix-blend-multiply cursor-zoom-in"
            />
            {zoomImage && (
              <div className=" hidden lg:block absolute min-w-[500px] min-h-[400px] overflow-hidden bg-slate-200 p-1 -right-[510px] top-0">
                <div
                  className=" w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150"
                  style={{
                    backgroundImage: `url(${activeImage})`,
                    backgroundPosition: `${zoomImageCoordinates.x * 100}% ${
                      zoomImageCoordinates.y * 100
                    }%`,
                    // backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backgroundBlendMode: "multiply"
                  }}
                ></div>
              </div>
            )}
          </div>
          <div className=" h-full">
            {loading ? (
              <div className=" flex gap-2 lg:flex-col overflow-scroll scrollbar-hidden h-full animate-pulse">
                {productImageList.map((el, index) => {
                  return (
                    <div
                      className=" h-20 w-20 bg-slate-200 rounded"
                      key={"loading Image" + index}
                    ></div>
                  );
                })}
              </div>
            ) : (
              <div className=" flex gap-2 lg:flex-col overflow-scroll scrollbar-hidden h-full">
                {data?.productImage?.map((imageUrl, index) => {
                  return (
                    <div
                      className=" h-20 w-20 bg-slate-200 rounded p-1"
                      key={imageUrl}
                    >
                      <img
                        src={imageUrl}
                        className=" h-full w-full object-scale-down mix-blend-multiply cursor-pointer"
                        onMouseEnter={() => {
                          handleMouseEnterImage(imageUrl);
                        }}
                        onClick={() => {
                          handleMouseEnterImage(imageUrl);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {loading ? (
          <div className=" grid gap-1 w-full">
            <p className=" bg-slate-200 animate-pulse h-6 lg:h-8 rounded-full w-full inline-block"></p>
            <h2 className=" text-2xl lg:text-4xl font-medium h-4 bg-slate-200 rounded-full animate-pulse w-full lg:h-8"></h2>
            <p className=" capitalize text-slate-400 bg-slate-200 min-w-[100px] h-6 animate-pulse w-full lg:h-8"></p>
            <div className="flex text-slate-200 gap-2 h-6 animate-pulse items-center w-full lg:h-8">
              <FaStar className=" animate-pulse" />
              <FaStar className=" animate-pulse" />
              <FaStar className=" animate-pulse" />
              <FaStar className=" animate-pulse" />
              <FaStarHalf className=" animate-pulse" />
            </div>
            <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 animate-pulse w-full lg:h-8">
              <p className="text-red-600 bg-slate-200 w-full lg:h-8"></p>
              <p className="text-slate-400 line-through bg-slate-200 w-full lg:h-8"></p>
            </div>
            <div className=" flex items-center gap-3 w-full lg:h-8">
              <button className="h-6 bg-slate-200 rounded animate-pulse w-full lg:h-8"></button>
              <button className="h-6 bg-slate-200 rounded animate-pulse w-full lg:h-8"></button>
            </div>
            <div className="w-full">
              <p className=" text-slate-500 font-medium my-1 h-6 bg-slate-200 rounded animate-pulse w-full lg:h-8"></p>
              <p className="h-10 bg-slate-200 rounded animate-pulse w-full lg:h-12"></p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <p className=" bg-red-200 text-red-500 px-2 rounded-full w-fit inline-block">
              {data?.brandName}
            </p>
            <h2 className=" text-2xl lg:text-4xl font-medium">
              {data?.productName}
            </h2>
            <p className=" capitalize text-slate-400">{data?.category}</p>
            <div className="flex text-yellow-300 gap-2 items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
              <p className="text-red-600">
                {displayINRCurrency(data?.selling)}
              </p>
              <p className="text-slate-400 line-through">
                {displayINRCurrency(data?.price)}
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <button className=" border-2 border-red-600 rounded px-3 py-1 min-w-[100px] text-red-600 font-medium hover:bg-red-600 hover:text-white" onClick={(e) => handleToBuy(e,data?._id)}>
                Buy
              </button>
              <button
                className=" border-2 border-red-600 rounded px-3 py-1 min-w-[100px] text-white bg-red-600 hover:text-red-600 hover:bg-white"
                onClick={(e) => handleAddToCart(e, data._id)}
              >
                Add to cart
              </button>
            </div>
            <div>
              <p className=" text-slate-500 font-medium my-1">Description :</p>
              <p className="">{data?.description}</p>
            </div>
          </div>
        )}
      </div>
      {data?.category && (
        <CategoryWiseProduct
          category={data.category}
          heading={"Recommended Product"}
        />
      )}
    </div>
  );
};

export default ProductDetails;
