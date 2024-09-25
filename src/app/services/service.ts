 import { cache } from "react";
import { BaseService } from "./base-service";
import { Revalidate } from "next/dist/server/lib/revalidate";
 
 export abstract class Services extends BaseService{
 static async getAllProducts(){
    var productResponse= await fetch(`${this.base_url}/products`)
    var products= await productResponse.json();
    return products;


}
static async getProductsById(id:any){
    var productResponse=await fetch("https://fakestoreapi.com/products/"+id)
    var product =productResponse.json();
    return product;
}

static async getProductsBySearch(search:any){
    var productResponse=await fetch("https://fakestoreapi.com/products/?"+search)
    var product =productResponse.json();
    return product;
}

}