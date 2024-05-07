//import React from 'react'

const Json = ({post}:any) => {
    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(post)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
    
        link.click();
      };
  return (
    <div>
        <div>
       {post ? <button type="button" onClick={exportData}>
          Export Data
        </button>: []}
      </div>
    </div>
  )
}

export default Json