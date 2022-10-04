import { useState, useCallback, useEffect } from "react";
import { searchPlugin } from "@react-pdf-viewer/search";
import "@react-pdf-viewer/search/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getArea, getPlugin } from "./util";
import InputContainer from "./InputContainer";
import PDFViewer from "./PDFViewer";
import SearchComponent from "./SearchComponent";
import { bookmarkPlugin } from "@react-pdf-viewer/bookmark";
import "@react-pdf-viewer/bookmark/lib/styles/index.css";
import coordinate from "../Coordinate.json";


export default function Index(props) {
  const { PDFUrl } = props;
  const searchPluginInstance = searchPlugin();
  const { Search } = searchPluginInstance;
  const bookmarkPluginInstance = bookmarkPlugin();
  const { Bookmarks } = bookmarkPluginInstance;
  const [coordinate_position, setCoordinate_position] = useState([])
  // console.log(Bookmarks);
  const [coordinates, setCoordinates] = useState({
    x1: 1,
    y1: 20,
    x2: 1,
    y2: 10,
    x3: 20,
    y3: 20,
    x4: 10,
    y4: 10
  });


  const [pageNo, setPageNo] = useState(0);
  const onChangePageNumber = (e) => {
    setPageNo(Number(e.target.value));
  };



  const onChangeCoordinates = (e) => {
    setCoordinates({
      ...coordinates,
      [e.target.name]: Number(e.target.value)
    });
  };


  const PDF = useCallback(() => {
    const calcArea = getArea({ ...coordinates, pageNo });
    const highlightPluginInstance = getPlugin(calcArea);
    return (
      <PDFViewer
        PDFUrl={PDFUrl}
        highlightPluginInstance={highlightPluginInstance}
        searchPluginInstance={searchPluginInstance}
        bookmarkPluginInstance={bookmarkPluginInstance}
      />
    );
  }, [coordinates, pageNo]);


  useEffect(() => {
   let coordinates_array = [];
   let coord = coordinate.response.values;
   for(let i=0; i<coord.length; i++){
      // console.log(coord[i].position.boundingRect);
      coordinates_array.push(coord[i].position.boundingRect)
   }
   setCoordinate_position(coordinates_array)
  }, [])

  // console.log(coordinate_position);
  const setCoordinatePosition = () => {
    for(let i=0; i<coordinate_position.length; i++){
      let x1;
      console.log(coordinate_position[0]);
    }
  }


  return (
    <div>
      <h1>Search PDF Keywords</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div style={{ width: "10%" }}>
          <InputContainer
            pageNo={pageNo}
            onChangePageNumber={onChangePageNumber}
            onChangeCoordinates={onChangeCoordinates}
            coordinates={coordinates}
          />
        </div>
        <div style={{ width: "80%" }}>
          <Search>
            {(renderSearchProps) => (
              <SearchComponent renderSearchProps={renderSearchProps} />
            )}
          </Search>
          <PDF />
        </div>
      </div>
    </div>
  );
}
