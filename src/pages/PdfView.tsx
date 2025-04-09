import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfView = () => {
  const [numPages, setNumPages] = useState(0); // 총 페이지수
  const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
  const [pageScale, setPageScale] = useState(1); // 페이지 스케일

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  return (
    <>
      {/* pdf 크기가 1280 * 720이 넘는 경우, overflow 처리 */}
      <div style={{ width: "1280px", height: "720px", overflow: "auto" }}>
        <Document file="/somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page width={1280} height={720} scale={pageScale} pageNumber={pageNumber} />
        </Document>
      </div>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>

        <p>페이지 이동 버튼</p>
        <button
          onClick={() => {
            setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
          }}
        >
          -
        </button>

        <p>페이지 스케일</p>
        <button
          onClick={() => {
            setPageScale(pageScale === 3 ? 3 : pageScale + 0.1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setPageScale(pageScale - 1 < 1 ? 1 : pageScale - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default PdfView;
