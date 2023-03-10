import React, { useState, useEffect } from 'react';
import {HiOutlineArrowSmRight, HiOutlineArrowSmLeft} from "react-icons/hi"

export const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
    
    return (
        <div className=" flex justify-center mt-2 m-auto p-4 ">
            <div className="border-2 flex justify-center font-semibold space-x-3 text-lg w-3/4 md:text-xl lg:text-2xl xl:text-3xl 2xl:w-full 2xl:text-6xl">
              <button disabled={currentPage === 1} onClick={handlePrevious} className="page-btn">
              <HiOutlineArrowSmLeft/>
              </button>
              {pageNumbers.map((number) => (
                  <button key={number} onClick={() => setCurrentPage(number)} className="page-btn">
                      {number}
                  </button>
              ))}
              <button
                  disabled={currentPage === pageNumbers.length} onClick={handleNext} className="page-btn">
                  <HiOutlineArrowSmRight/>
              </button>
            </div>
          </div>
    )
}