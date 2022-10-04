import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";

function PDFViewer(props) {
  const {
    PDFUrl,
    highlightPluginInstance,
    searchPluginInstance,
    bookmarkPluginInstance
  } = props;
  const workerUrl = "https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js";
  return (
    <Worker workerUrl={workerUrl}>
      <Viewer
        defaultScale={SpecialZoomLevel.PageFit}
        fileUrl={PDFUrl}
        plugins={[
          highlightPluginInstance,
          searchPluginInstance,
          bookmarkPluginInstance
        ]}
      />
    </Worker>
  );
}

export default PDFViewer;
