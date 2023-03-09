import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Pagination2 = ({ data, rowsPerPage, currentPage, setCurrentPage }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
    };

    return (
        <div className="flex justify-center mt-4">
            {windowSize.width > 2560 && (
                <div className="flex flex-row items-center space-x-2">
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md mr-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(event, currentPage > 1 ? currentPage - 1 : 1)
                        }
                    >
                        <IoIosArrowBack size="1.5em" />
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`bg-white text-gray-700 font-semibold px-3 py-2 rounded-md focus:outline-none ${currentPage === page ? "bg-gray-200" : ""
                                }`}
                            onClick={(event) => handlePageClick(event, page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md ml-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(
                                event,
                                currentPage < pageNumbers.length
                                    ? currentPage + 1
                                    : pageNumbers.length
                            )
                        }
                    >
                        <IoIosArrowForward size="1.5em" />
                    </button>
                </div>
            )};

            {windowSize.width <= 2560 && windowSize.width > 1440 && (
                <div className="flex flex-row items-center space-x-2">
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md mr-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(event, currentPage > 1 ? currentPage - 1 : 1)
                        }
                    >
                        <IoIosArrowBack size="1.5em" />
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`bg-white text-gray-700 font-semibold px-3 py-2 rounded-md focus:outline-none ${currentPage === page ? "bg-gray-200" : ""
                                }`}
                            onClick={(event) => handlePageClick(event, page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md ml-2 focus:outline-none"
                        onClick={(event) => handlePageClick(event, currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
                    >
                        <IoIosArrowForward size="1.5em" />
                    </button>
                </div>
            )};
                
            {windowSize.width <= 1440 && windowSize.width > 1024 && (
                <div className="flex flex-row items-center space-x-2">
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md mr-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(event, currentPage > 1 ? currentPage - 1 : 1)
                        }
                    >
                        <IoIosArrowBack size="1.5em" />
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`bg-white text-gray-700 font-semibold px-3 py-2 rounded-md focus:outline-none ${currentPage === page ? "bg-gray-200" : ""
                                }`}
                            onClick={(event) => handlePageClick(event, page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md ml-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(
                                event,
                                currentPage < pageNumbers.length
                                    ? currentPage + 1
                                    : pageNumbers.length
                            )
                        }
                    >
                        <IoIosArrowForward size="1.5em" />
                    </button>
                </div>
            )};

            {windowSize.width <= 1024 && windowSize.width > 768 && (
                <div className="flex flex-row items-center space-x-2">
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md mr-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(event, currentPage > 1 ? currentPage - 1 : 1)
                        }
                    >
                        <IoIosArrowBack size="1.5em" />
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`bg-white text-gray-700 font-semibold px-3 py-2 rounded-md focus:outline-none ${currentPage === page ? "bg-gray-200" : ""
                                }`}
                            onClick={(event) => handlePageClick(event, page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="bg-white text-gray-700 font-semibold px-3 py-2 rounded-md ml-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(
                                event,
                                currentPage < pageNumbers.length
                                    ? currentPage + 1
                                    : pageNumbers.length
                            )
                        }
                    >
                        <IoIosArrowForward size="1.5em" />
                    </button>
                </div>
            )};

            {windowSize.width <= 768 && (
                <div className="flex flex-row items-center space-x-2">
                    <button
                        className="bg-white text-gray-700 font-semibold px-2 py-1 rounded-md mr-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(event, currentPage > 1 ? currentPage - 1 : 1)
                        }
                    >
                        <IoIosArrowBack size="1.2em" />
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`bg-white text-gray-700 font-semibold px-2 py-1 rounded-md focus:outline-none ${currentPage === page ? "bg-gray-200" : ""
                                }`}
                            onClick={(event) => handlePageClick(event, page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="bg-white text-gray-700 font-semibold px-2 py-1 rounded-md ml-2 focus:outline-none"
                        onClick={(event) =>
                            handlePageClick(
                                event,
                                currentPage < pageNumbers.length
                                    ? currentPage + 1
                                    : pageNumbers.length
                            )
                        }
                    >
                        <IoIosArrowForward size="1.2em" />
                    </button>
                </div>
            )};
        </div>
    );
}; 
          
