import React from 'react';

export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  function goToNextPage() {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  }
  function goToPrevPage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }
  return (
    <div className="flex items-center">
      <button onClick={goToPrevPage}>Previous</button>
      <div className="flex items-center">
        {pageNumbers.map((pgNumber) => (
          <div
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? 'active' : ''} `}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </button>
          </div>
        ))}
      </div>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
}
