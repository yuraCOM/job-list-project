import React from "react";
import { usePagination, DOTS } from "./usePagination";
import arrowLeft from "../../assets/Arrow left.png";
import arrowRight from "../../assets/Arrow right.png";
import { keyRandom } from "../../utils/utils.ts";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  let lastPage = paginationRange[paginationRange.length - 1];
  // console.log("currentPage =", currentPage, "last page=", lastPage);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) {
      console.log(lastPage, currentPage);
      onPageChange(1);
    } else {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage === 1) {
      onPageChange(lastPage);
    } else {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center   ">
      <ul className="inline-flex justify-center items-center mt-[49px] mb-[64px] bg-[white] rounded-[10.4px] shadow-lg max-[414px]:w-[396px] max-[414px]:h-[40px] max-[414px]:mt-[18px]  max-[414px]:mb-[17px]">
        <img
          className="cursor-pointer w-[18px] h-[18px] ml-[23px] mr-[31px] max-[414px]:hidden "
          src={arrowLeft}
          alt="arrowLeft"
          onClick={onPrevious}
        ></img>
        <div className=" w-[1.3px] h-[31.2px] border-2 mr-[55px] max-[414px]:hidden"></div>

        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={keyRandom()}
                className={
                  "text-[20.8px] text-[#70778B] w-[31px] h-[31px] mr-[8px] font-bold mt-[12px] mb-[9px] text-align:center"
                }
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={keyRandom()}
              className={
                currentPage === pageNumber
                  ? "text-[20.8px] text-[#70778B] w-[31px] h-[31px] mr-[8px] font-bold cursor-pointer border-b-4 border-[#5876C5] text-center"
                  : "text-[20.8px] text-[#70778B] w-[31px] h-[31px] mr-[8px] font-bold cursor-pointer text-center "
              }
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <div className=" w-[1.3px] h-[31.2px] border-2 ml-[55px] max-[414px]:hidden "></div>
        <img
          className="cursor-pointer w-[18px] h-[18px] ml-[31px] mr-[23px] max-[414px]:hidden"
          src={arrowRight}
          alt="arrowRight"
          onClick={onNext}
        ></img>
      </ul>
    </div>
  );
};

export default Pagination;
