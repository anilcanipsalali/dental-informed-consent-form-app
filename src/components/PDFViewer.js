import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

const PdfViewerComponent = ({ document }) => {
  return (
    <>
      <Document file={document} renderMode="canvas">
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={1}
        />
      </Document>
    </>
  );
};

export default PdfViewerComponent;
