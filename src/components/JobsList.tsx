import { observer } from "mobx-react-lite";
import React, { FC, useMemo, useState } from "react";
import { JobsLisrProps } from "../types/types";
import JobItem from "./JobItem";
import Pagination from "./Pagination/Pagination";

const JobsList: FC<JobsLisrProps> = observer(({ jobs }) => {
  let PageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return jobs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div
      className="jod-list bg-[#E6E9F2] pt-[28px] pb-[64px] max-[414px]:mx-[9px] 
    max-[414px]:pt-[9px] max-[414px]:pb-[0px] "
    >
      {currentTableData.map((job, index) => (
        <JobItem key={index} item={job} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalCount={jobs.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
});

export default JobsList;
