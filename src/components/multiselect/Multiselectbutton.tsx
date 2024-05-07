import {useState} from 'react'
import Download from "~/components/datadownload/Download";


const Multiselectbutton = ({posts}:any) => {
  
  const [selectedFormat, setSelectedFormat] = useState<any>(""); // Initialize state
  console.log(selectedFormat)
  const handleChange = (event:any) => {
    setSelectedFormat(event.target.value); // Update state on change
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" >
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Download
        </label>
        <select
          id="countries"
          value={selectedFormat} // Set selected value from state
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Select Formats</option>
          <option value="CSV">CSV</option>
          <option value="EXCEL">EXCEL</option>
          <option value="JSON">JSON</option>
        </select>
      </form>
      <div>
        {selectedFormat ? 
        <Download posts={posts} format={selectedFormat}/>: []}
      </div>
    </div>
  );
};

export default Multiselectbutton;
