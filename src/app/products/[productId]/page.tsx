import React from 'react'
// handling dynamic routes
const product = ({params}:{params:{productId:string}}) => {
  return (
    <div>product details {params.productId}</div>
  )
}

export default product