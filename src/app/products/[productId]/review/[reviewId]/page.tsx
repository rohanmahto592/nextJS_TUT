import React from 'react'

const review = ({params}:{params:{productId:string,reviewId:string}}) => {
  return (
    <div>product id {params.productId} and review id {params.reviewId}</div>
  )
}

export default review