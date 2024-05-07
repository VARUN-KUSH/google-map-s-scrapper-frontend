//import React from 'react';
import Tables from '../tables/Tables';

const Pagination = ({ posts}:any):any => {
    console.log(posts)
  return (
    <>
    
      {posts.map((data:any, index:number) => (
        <div className='list' key={index}>
            <Tables tabledata={data}/>
        </div>
      ))}
    </>
  );
};

export default Pagination;