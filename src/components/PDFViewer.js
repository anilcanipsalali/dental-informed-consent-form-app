import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

const PdfViewerComponent = ({ document }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const nextPage = () => {
    setPageNumber(pageNumber >= numPages ? pageNumber : pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber <= 1 ? 1 : pageNumber - 1);
  };

  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Document file={document} onLoadSuccess={onDocumentSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={1}
        />
        <div className="">
          <button title="<" className="" onClick={prevPage} />
          <button title=">" className="" onClick={nextPage} />
        </div>
      </Document>
    </>
  );
};

export default PdfViewerComponent;
