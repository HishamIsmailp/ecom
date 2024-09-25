import { Services } from '@/app/services/service';
import React from 'react'

export async function generateMetadata(props:any){
  console.log("metadata",props)

   var product=await Services.getProductsById(props.params.productid);
  
    return {
      title:product.title

    }
   

}



export default async function ProductDetails(props:any) {

    console.log("props from product detailedpage",props)
    var prodId=props.params.productid;

    var p=props.searchParams.color;

    

    async function getProductsById(){
        var productResponse=await fetch("https://fakestoreapi.com/products/"+prodId)
        var product =productResponse.json();
        return product;
    }

    var product=await getProductsById();
    // var product=await Services.getProductsById(prodId);

    
  return (
    <div>ProductDetails:
      {/* {prodId} */}
      {p}
    {product.title}
    {product.price}
    
    </div>
  )
}
