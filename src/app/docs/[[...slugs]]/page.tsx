import React from 'react'

const docs = ({params}:{params:{slugs:string[]}}) => {
  if(params?.slugs?.length===2)
  {
    return <h1>docs having text {params.slugs[0]} and second text {params.slugs[1]}</h1>
  }
  else if(params?.slugs?.length===1)
  {
    return <h1>docs having text {params.slugs[0]}</h1>
  }
  return <h1>reviwing docs</h1>
}

export default docs