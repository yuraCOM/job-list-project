import { IJobItem } from "./../types/types";
import { makeAutoObservable } from "mobx";

export class StoreJobs {
  jobsArray: IJobItem[] = [];

  jobsPagination: IJobItem[] = [];

  selectedJob = {} as IJobItem;

  constructor() {
    makeAutoObservable(this);
  }

  setJobsArray(data: IJobItem[]) {
    this.jobsArray = data;
  }

  setJobsPagination(data: IJobItem[]) {
    this.jobsPagination = data;
  }

  setSelectedJob(data: IJobItem) {
    this.selectedJob = data;
  }
}

export default new StoreJobs();
