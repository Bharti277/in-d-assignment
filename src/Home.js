import React, { useEffect, useState } from 'react';
import PdfFile from "./File/pdf_file.pdf";
import coordinate from "./Coordinate.json";
import { Document, Page } from 'react-pdf'
import "./Home.css";

function Home() {
  const [name, setName] = useState([]);
  const [searchText, setSearchText] = useState("document");
  const [numPage, setNumPage] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  useEffect(() => {
    let coord = coordinate.response.values;
    console.log(coord);
    setName(coord)
  }, [])
  return (
    <div className='home_container'>
        <div className="column">
          <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <div>
      <Document file={PdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
        </div>

        <div className="column">
        {/* <iframe height="700px" width="100%" src={PdfFile} /> */}
        </div>
    </div>
  )
}

export default Home;