
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
       {post ? <button onClick={exportData}
       className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            <span className="relative">Download in JSON</span>
          </button>: []}
      </div>
    </div>
  )
}

export default Json