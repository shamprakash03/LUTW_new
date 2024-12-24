
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import ProductCategory from "../clien-side/src/helpers/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import uploadImage from "../clien-side/src/helpers/uploadImage";
import DisplayImage from "./DisplayImage";
import { toast } from "react-toastify";
import SummaryApi from "../clien-side/src/common";

const AdminEditProduct = ({
  onClose,
  dataName,
  fetchData,
}) => {
  // console.log(dataName);
  const [data, setData] = useState({
    ...dataName,
    productName: dataName?.productName,
    brandName: dataName?.brandName,
    category: dataName?.category,
    productImage: dataName?.productImage  || [],
    description: dataName?.description,
    price: dataName?.price,
    selling: dataName?.selling, //
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadProductImage = async (e) => {
    const file = e.target.files[0];

    // setUploadProductImageInput(file.name);
    const uploadImageCloud = await uploadImage(file);
    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloud.url],
      };
    });
  };
  const handleImageDelete = async (index) => {
    // alert("Image deleted");
    console.log("Image deleted", index);
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((preve) => {
      return {
        ...preve,
        productImage: [...newProductImage],
      };
    });
  };
  const handleUpload = async(e) => {
    e.preventDefault();
    const response = await fetch(SummaryApi.updateProduct.url,{
      method : SummaryApi.updateProduct.method,
      credentials : 'include',
      body : JSON.stringify(data),
      headers : {
        "Content-Type" : "application/json"
      }
    })
    const responseData = await response.json();
    // const navigate = useNavigate()
    if(responseData.success){
      toast.success(responseData?.message);
      onClose()
      fetchData()
    }
    if(responseData.error){
      toast.error(responseData?.message);
    }
  };
  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
    <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
      <div className="flex justify-between items-center pb-3">
        <h2 className="font-bold text-lg">Edit Product</h2>
        <div
          className=" w-fit ml-auto text-2xl hover:text-blue-600 cursor-pointer"
          onClick={onClose}
        >
          <CgClose />
        </div>
      </div>
      <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5" onSubmit={handleUpload}>
        <label htmlFor="productName" className="font-semibold text-md">
          Product Name :
        </label>
        <input
          type="text"
          id="productName"
          placeholder="Enter product Name "
          value={data.productName}
          name="productName"
          required
          onChange={handleChange}
          className="p-2 bg-slate-100 border rounded"
        />
        <label htmlFor="brandName" className="font-semibold text-md mt-3">
          Brand Name :
        </label>
        <input
          type="text"
          id="brandName"
          required
          placeholder="Enter Brand Name "
          value={data.brandName}
          name="brandName"
          onChange={handleChange}
          className="p-2 bg-slate-100 border rounded"
        />
        <label htmlFor="category" className="font-semibold text-md mt-3">
          Category :
        </label>
        <select
          value={data.category}
          required
          onChange={handleChange}
          name="category"
          className="p-2 bg-slate-100 border rounded"
        >
          <option value={""}>Select Category</option>
          {ProductCategory.map((el, index) => {
            return (
              <option value={el.value} key={el.value + index}>
                {el.label}
              </option>
            );
          })}
        </select>
        <label htmlFor="productImage" className="font-semibold text-md mt-3">
          Product Image :
        </label>
        <label htmlFor="uploadImageInput">
          <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
            <div className="flex justify-center items-center text-slate-500 flex-col gap-2 ">
              <span className="text-3xl">
                <FaCloudUploadAlt />
              </span>
              <p className="text-sm">Upload Product Image</p>
              <input
                className="hidden"
                type="file"
                name="uploadImageInput"
                id="uploadImageInput"
                onChange={handleUploadProductImage}
              />
            </div>
          </div>
        </label>
        <div>
          {data?.productImage[0] ? (
            <div className="flex items-center gap-2">
              {data.productImage.map((el, index) => {
                return (
                  <div className="relative group">
                    <img
                      src={el}
                      alt="val"
                      width={80}
                      height={80}
                      className="bg-slate-100 border cursor-pointer"
                      onClick={() => {
                        setOpenFullScreenImage(true);
                        setFullScreenImage(el);
                      }}
                    />
                    <div
                      className="absolute bottom-0 right-0 p-1 text-white bg-pink-300 hover:bg-pink-400 hover:text-black cursor-pointer rounded-full hidden group-hover:block"
                      onClick={() => {
                        handleImageDelete(index);
                      }}
                    >
                      <MdDelete />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-red-600 text-xs">
              *Please Upload Product Image
            </p>
          )}
        </div>
        <label htmlFor="price" className="font-semibold text-md mt-3">
          Price :
        </label>
        <input
          type="number"
          id="price"
          required
          placeholder="Enter Price "
          value={data.price}
          name="price"
          onChange={handleChange}
          className="p-2 bg-slate-100 border rounded"
        />
        <label htmlFor="selling" className="font-semibold text-md mt-3">
          Selling Price :
        </label>
        <input
          type="number"
          id="selling"
          required
          placeholder="Enter Selling Price "
          value={data.selling}
          name="selling"
          onChange={handleChange}
          className="p-2 bg-slate-100 border rounded"
        />
        <label htmlFor="description" className="font-semibold text-md mt-3">
          Description :
        </label>
        <textarea
          id="description"
          name="description"
          required
          placeholder="Enter Description"
          value={data.description}
          onChange={handleChange}
          className="p-2 bg-slate-100 border rounded h-28 resize-none"
        />
        <button
          className="px-3 py-3 bg-green-500 text-black mb-10 hover:bg-green-600 hover:text-white"
       
        >
          Update Product
        </button>
      </form>
    </div>
    {openFullScreenImage && (
      <DisplayImage
        imgUrl={fullScreenImage}
        onClose={() => setOpenFullScreenImage(false)}
      />
    )}
  </div>
);
};

export default AdminEditProduct;
