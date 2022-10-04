import PDF_File from "./File/pdf_file.pdf";
import PDFComponent from "./PDFComponent/index";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <PDFComponent PDFUrl={PDF_File} />
    </div>
  );
}
