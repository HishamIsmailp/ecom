import React from 'react'

export default function DynamicSearch(props:any) {
    console.log("props from dynamic search",props);
    var color=props.params.searchparams[4];
  return (
    <div>DynamicSearch:{color}</div>
  )
}
