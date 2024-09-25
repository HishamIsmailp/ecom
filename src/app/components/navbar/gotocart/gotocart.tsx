"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Gotocart() {
    const router=useRouter();
  return (
    <div><button onClick={()=>{router.push('/carts')}}>Go to cart</button>

    </div>
  )
}
