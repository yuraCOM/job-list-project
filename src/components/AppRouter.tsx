import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import StoreJobs from "../store/StoreJobs";
import { IJobItem } from "../types/types";
import JobDetails from "./JobDetails";
import JobsList from "./JobsList";

interface AppRouterProps {
  jobs: IJobItem[];
}

const AppRouter: FC<AppRouterProps> = observer(({ jobs }) => {
  const navigate = useNavigate();
  const path = document.location.pathname;

  useEffect(() => {
    let path = document.location.pathname;
    if (path === "/job-details" && !StoreJobs.selectedJob.id) {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route key={"pathmain"} path="/" element={<JobsList jobs={jobs} />} />
      <Route key={"pathno"} path="*" element={<JobsList jobs={jobs} />} />

      {path === "/job-details" && StoreJobs.selectedJob.id && (
        <Route
          key={"jobdetails"}
          path="/job-details"
          element={<JobDetails item={StoreJobs.selectedJob} />}
        />
      )}
    </Routes>
  );
});

export default AppRouter;
