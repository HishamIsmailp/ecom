import { Services } from "@/app/services/service";
import React from "react";
import Productcard from "../productcard/productcard";
import "./productlist.css";

export default async function Productlist() {
  var products = await Services.getAllProducts();

  return (
    <div className="productListContainer">
      {products.map((p: any) => {
        return <Productcard pro={p} />;
      })}
    </div>
  );
}
