//import React from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Excel = ({post}:any) => {
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(post);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
        // Buffer to store the generated Excel file
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    
        saveAs(blob, "data.xlsx");
    };
  return (
    <div>

       {post ?  <button onClick={exportToExcel} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
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
            <span className="relative">Download in EXCEL</span>
          </button>: []}
    </div>
  )
}

export default Excel