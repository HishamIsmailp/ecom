"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductCard(props: any) {
  const router = useRouter();
  const [selectedProd, setSelectedProd] = useState({});
  const prod = props.pro;

  function OnSelectedProd() {
    console.log("Selected Product:", prod);
    setSelectedProd(prod);
  }

  return (
    <div className="cardContainer">
      <img src={prod.image} alt={prod.title} className="productImage" />
      <h3 className="productTitle">{prod.title}</h3>
      <button 
        className="detailButton" 
        onClick={() => router.push(`/products/${prod.id}`)}
      >
        View Details
      </button>
      <Link href={`/products/${prod.id}`} className="link">
        Go to Product
      </Link>
      <button 
        className="samePageButton"
        onClick={() => router.push('/products?title=' + prod.title)}
      >
        Similar Products
      </button>
    </div>
  );
}
