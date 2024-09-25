import React, { Suspense } from 'react'
import Productcard from '../components/navbar/productcard/productcard';
import { Services } from '../services/service';
import Gotocart from '../components/navbar/gotocart/gotocart';
import Link from 'next/link';
import { cookies } from 'next/headers'
import { headers } from 'next/headers';
import Productlist from '../components/navbar/productlist/productlist';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'products-page',
  description: 'Designed by batch',
}




// async function getAllProducts(){
//     var productResponse= await fetch('https://fakestoreapi.com/products');
//     var products= await productResponse.json();
//     return products;
// }

export default async function ProductsPage(props:any) {
  // console.log("props from productspage:",props);
  const cookieStore = cookies();
  const themecookie = cookieStore.get('authToken')
  console.log("theme",themecookie);
  console.log("themevalue",themecookie?.value);

  const headersList = headers();
  const referer = headersList.get('referer')
console.log("referer",referer)

    async function getAllProducts(){
        var productResponse= await fetch('https://fakestoreapi.com/products')
        var products= await productResponse.json();
        return products;
    }
    
 
    var products=await Services.getAllProducts();
    // var products=await getAllProducts();
    console.log("@@@",products)
    // var search=props.searchParams.title;


  
    
  return (
    <div>ProductsPage :
      <Gotocart/>
    <Link href='#recommended'>Recommended products</Link>
    {/* {products.map((p:any)=>{return (<div>{p.title}</div>)})} */}
  
       {/* {products.map((p:any)=>{return<Productcard pro={p}/>})} */}
    <Suspense fallback={<h1 style={{color:"red"}}>Loading.....please wait</h1>}>
    <Productlist/>
    </Suspense>
    
   

       <div id='recommended'>Recommended proucts</div>

    </div>
  )
}
