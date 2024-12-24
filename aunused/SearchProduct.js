import React, { useEffect, useState } from "react";
import SummaryApi from "../clien-side/src/common";
import VerticalCard from "../components/VerticalCard";
import { useLocation } from "react-router-dom";

 export const SearchProduct = () => {
  const query = useLocation();
  // console.log("SearchProduct", query);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("SearchProduct", query.search);
  const fetchProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.searchProduct.url + query.search);
    const responseData = await response.json();
    setLoading(false)
    setData(responseData.data);
  };
  useEffect(() => {
    fetchProduct();
  }, [query]);
  // console.log("data",data);
  return (
    <div className=" container mx-auto p-1">
      {loading && <p className=" text-lg text-center">Loading...</p>}
     
      <p className="text-lg font-semibold">Search Results :{data.length}</p>
      {data.length === 0 && !loading && (
        <p className=" bg-white text-lg text-center p-4">No Data Found...</p>
      )}
      {data.length !== 0 && !loading && (
        <VerticalCard loading={loading} data={data} />
      )}
    </div>
  );
};

export default SearchProduct
