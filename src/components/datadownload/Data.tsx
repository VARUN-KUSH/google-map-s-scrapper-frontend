import CsvDownloader from "react-csv-downloader";
import { Button } from "../ui/button";

const Data = ({ post }: any) => {
  //const [selectedFormat, setSelectedFormat] = useState<any>();
  //const [csv, setCSV] = useState<any>(false);
  console.log(post);

  return (
    <div>
      {post ? (
        <CsvDownloader filename="map's scrapper file" datas={post}>
          <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
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
            <span className="relative">Download in CSV</span>
          </button>
        </CsvDownloader>
      ) : (
        []
      )}
    </div>
  );
};

export default Data;
