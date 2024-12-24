import SummaryApi from "../common"

const fetchCategoryWiseProduct = async(category) => {
    // console.log("FetchCategoryWiseProduct", category);
 const dataResponse = await fetch(SummaryApi.categoryWiseProduct.url, {
    method: SummaryApi.categoryWiseProduct.method,
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        category : category
    })
 })
 const responseData = await dataResponse.json() 
//  console.log("Response data: ", responseData);
 return responseData
}

export default fetchCategoryWiseProduct;