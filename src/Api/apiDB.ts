import axios from "axios";
import { jobsArr } from "../db/jobs";
import { IJobItem } from "../types/types";

let token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export async function fetchJobs(): Promise<any> {
  try {
    const response = await axios.get<IJobItem[]>(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (e) {
    alert(e);
    alert("The site is down - use data from local storage!");
    return jobsArr;
  }
}
