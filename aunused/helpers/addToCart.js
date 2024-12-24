import SummaryApi from "../common";
import { toast } from "react-toastify";

const addToCart = async(e,id) => {
   e?.stopPropagation();
   e?.preventDefault();
   console.log("Add to",id);
   const response = await fetch(SummaryApi.addToCartProduct.url, {
      method : SummaryApi.addToCartProduct.method,
      credentials : 'include',
      headers : {
         "Content-Type" : "application/json"
      },
      body : JSON.stringify({
         productId : id
      })
   })
   const responseData = await response.json()
   // console.log("responseData", responseData)
   if(responseData.message){
      toast.success(responseData.message)
   }
   if(responseData.error){
      toast.error(responseData.message)
   }
   return responseData;

}


export default addToCart