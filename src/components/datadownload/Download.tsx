//import React from 'react'
import Data from './Data'
import Excel from './Excel'
import Json from './Json'

const Download = ({posts}:any) => {
  return (
    <div>
        <Data post={posts}/>
        <Excel  post={posts}/>
        <Json post={posts}/>
    </div>
  )
}

export default Download