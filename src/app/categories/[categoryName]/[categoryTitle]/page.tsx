import React from 'react'

export default function CategoryDetails(props:any) {

    console.log("props from catdetails",props)
    const catName=props.params.categoryName;
    const cattitle=props.params.categoryTitle;


  return (
    <div>CategoryDetails:
    {catName}
    {cattitle}</div>

  )
}
