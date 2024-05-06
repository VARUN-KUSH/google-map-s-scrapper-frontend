import React, { useState } from "react";
import CsvDownloader from "react-csv-downloader";

const Data = ({ post }: any) => {
  //const [selectedFormat, setSelectedFormat] = useState<any>();
  //const [csv, setCSV] = useState<any>(false);
  console.log(post);
  
  return (
    <div>
     {post ? <CsvDownloader filename="map's scrapper file" datas={post} /> : []}
    </div>
  );
};

export default Data;
