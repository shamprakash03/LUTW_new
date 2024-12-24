import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductCategory from "../helpers/productCategory";
import CategoryWiseProduct from "../components/CategoryWiseProductDisplay";
import VerticalCard from "../components/VerticalCard";
import SummaryApi from "../clien-side/src/common";

const CategoryProduct = () => {
  const params = useParams();
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const [sortBy, setSortBy] =useState("")
  const urlSearch = new URLSearchParams(location.search)
  const urlCategoryListInArray = urlSearch.getAll("category")
  const urlCategoryListInObject = {}
  urlCategoryListInArray.forEach(el => {
    urlCategoryListInObject[el] = true
  })

  const [selectCategory,setSelectCategory] = useState(urlCategoryListInObject)
  const [filterCategoryList,setFilterCategoryList] = useState([])
  // console.log("Category Product", params);
  // {
  //   params.categoryName
  // }
  const fetchData = async() => {
    const response = await fetch(SummaryApi.filterProduct.url, {
      method: SummaryApi.filterProduct.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: filterCategoryList
      })
    })

    const dataResponse = await response.json()
    setData(dataResponse?.data || [])
  }
  const handleSelectCategory = (e) => {
    const { name, value, checked} = e.target
    setSelectCategory((prev) => {
      return{
        ...prev,
        [value] : checked
      }
    })
  }
  useEffect(()=> {
    fetchData()
  },[filterCategoryList])
  useEffect(() => {
     const arrayOfCategory = Object.keys(selectCategory).map(categoryKeyName => {
      if(selectCategory[categoryKeyName]){
        return categoryKeyName
      }
      return null
     }).filter(el => el)
     setFilterCategoryList(arrayOfCategory)

     const urlFormat = arrayOfCategory.map((el, index) => {
      if((arrayOfCategory.length - 1) === index ){
        return `category=${el}`
      }

      return `category=${el}&&`
     })
     navigate("/product-category?" + urlFormat.join(""))
  },[selectCategory])

   const handleOnChangeSortBy = (e) => {
        const { value } = e.target
        setSortBy(value)
        if(value === "asc"){
          setData(prev  => prev.sort((a,b) => a.selling - b.selling))
        }
        if(value === "dsc"){
          setData(prev  => prev.sort((a,b) => b.selling - a.selling))
        }
   }
   useEffect(() => {

   },[sortBy])

  return (
    <div className=" container mx-auto p-4">
      {/** destop */}
      <div className=" hidden lg:grid grid-cols-[200px,1fr]">
        {/** left */}
        <div className=" bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll">
          <div className="">
            <h3 className="text-base uppercase font-medium text-slate-500 border-b border-slate-300 pb-1">
              Sort by
            </h3>
            <form className=" text-sm flex flex-col gap-2 py-2">
              <div className="flex items-center gap-3">
                <input type="radio" name="sortBy" value={"asc"} onChange={handleOnChangeSortBy} checked={sortBy === "asc"} />
                <label className="">Price - Low to High</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="sortBy" value={"dsc"} onChange={handleOnChangeSortBy} checked={sortBy === "dsc"} />
                <label className="">Price - High to Low</label>
              </div>
            </form>
          </div>
          <div className="">
            <h3 className="text-base uppercase font-medium text-slate-500 border-b border-slate-300 pb-1">
              Category
            </h3>
            <form className=" text-sm flex flex-col gap-2 py-2">
            {
              ProductCategory.map((categoryName, index) => {
                 return(
                  <div className=" flex items-center gap-3">
                    <input type="checkbox" name={"category"} checked={selectCategory[categoryName?.value]} value={categoryName?.value} id={categoryName?.value} onChange={handleSelectCategory} />
                    <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                  </div>
                 )
              })
            }
            </form>
          </div>
        </div>
        {/** right */}
        <div className=" px-4">
          <p className=" font-medium text-slate-800 text-lg my-2">Search Results : {data.length}</p>
         <div className="min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)] scrollbar-hidden">
         {
            data.length !== 0 && !loading && (
              <VerticalCard data= {data} loading={loading} />
            )
          }
         </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
