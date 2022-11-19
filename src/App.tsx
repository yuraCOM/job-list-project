import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { fetchJobs } from "./Api/apiDB";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader/Loader";
import StoreJobs from "./store/StoreJobs";
import { IJobItem } from "./types/types";
import { randomIntFromInterval } from "./utils/utils";

const App = observer(() => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchJobs();
      // console.log(data);

      //mock-data STARS
      data.forEach((i: IJobItem) => {
        i.stars = randomIntFromInterval(1, 5);
      });

      //mock-data +extra data jobs for pagination
      let repiteN = 52;
      for (let index = 0; index < repiteN; index++) {
        data.push(data[randomIntFromInterval(0, 19)]);
      }

      StoreJobs.setJobsArray(data);

      setTimeout(() => {
        setLoad(false);
      }, 1500);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="job-main m-0 p-0 w-[1920px] max-[414px]:w-[414px] max-[414px]:bg-[#E6E9F2] ">
        {!load && StoreJobs.jobsArray.length ? (
          <AppRouter jobs={StoreJobs.jobsArray} />
        ) : (
          <Loader />
        )}
      </div>
    </BrowserRouter>
  );
});

export default App;
