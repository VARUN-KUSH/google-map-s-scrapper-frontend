//import React from 'react'
import Data from './Data'
import Excel from './Excel'
import Json from './Json'

const Download = ({posts, format}:any) => {
  console.log(format)
  if(format== "CSV") {
    return (
      <div className='flex items-center justify-center'> <Data post={posts}/></div>
     
    )
  } else if(format=="JSON") {
    return (
      <div  className='flex items-center justify-center'><Json post={posts}/></div>
    )
  }
  return (
    <div  className='flex items-center justify-center'>
        <Excel  post={posts}/>
    </div>
  )
}

export default Download