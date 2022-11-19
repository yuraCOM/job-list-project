import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import locationPng from "../assets/Combined Shape.png";
import rect from "../assets/Rectangle 31.png";
import starPic from "../assets/star.png";
import StoreJobs from "../store/StoreJobs";
import { IJobItem } from "../types/types";
import { diffDates } from "../utils/utils";

// let job = {
//   id: "635ee6d304601d61a71951f6",
//   name: "Sureplex",
//   email: "sureplex@gmail.bo";
//   phone: "+97117307890";
//   title: "Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat nulla ipsum eiusmod.";
//   salary: "60k-71k";
//   address: "76 Blende Jardine Place";
//   benefits: ["Pay vocations", "Flexible hours"];
//   location: {
//     lat: 9.804124;
//     long: 147.139488;
//   };
//   pictures: [
//     "https://picsum.photos/200/300",
//     "https://picsum.photos/200/300",
//     "https://picsum.photos/200/300"
//   ];
//   createdAt: "2012-05-04T01:38:26.141Z";
//   updatedAt: "2012-05-05T01:38:26.141Z";
//   description: "Reprehenderit Lorem consectetur non et minim adipisicing deserunt. Ipsum reprehenderit do pariatur proident esse sint magna ullamco qui minim. Anim Lorem ut laborum occaecat culpa consectetur reprehenderit aliquip ex cupidatat proident quis laborum. Nulla aute ipsum et anim.\n  \n  Responsopilities:\n    Ex qui consequat deserunt laborum cupidatat ut ullamco veniam minim nisi incididunt aliquip incididunt. Sunt sunt ullamco elit ipsum ea enim consectetur sit magna minim ea cupidatat. Et ut proident voluptate quis nulla anim commodo in pariatur ad.\n  \nCompensation & Benefits:\n\t    Incididunt et sint incididunt laboris duis. Deserunt consectetur sint aute et sint aliqua quis nostrud non elit aliqua elit tempor. Aliquip ad dolore proident eu consequat elit amet laborum aute excepteur sit labore.\n\n";
//   employment_type: ["Full time"];
// }

interface JobItemProps {
  item: IJobItem;
}

const JobItem: FC<JobItemProps> = ({ item }) => {
  const navigate = useNavigate();

  let stars = (num: number) => {
    let starsArr = [];
    for (let index = 0; index < num; index++) {
      starsArr.push(<img key={index + "imgStar"} src={starPic} alt="star" />);
    }
    return starsArr;
  };

  function getJobDetails(job: IJobItem) {
    navigate("/job-details");
    StoreJobs.setSelectedJob(job);
    // console.log(job);
  }

  return (
    <div
      className=" job-item bg-white  my-0 mb-[8px] mt-[8px] rounded-[8px] px-4 py-6 mx-[260px] 
    max-[414px]:w-[396px] max-[414px]:m-auto max-[414px]:mb-[8px] max-[414px]:p-0 
    max-[414px]:bg-[#EFF0F5] max-[414px]:shadow"
    >
      <div
        className="job-item-conteiner flex flex-row justify-between 
      max-[414px]:flex-col max-[414px]:justify-center "
      >
        <div className="img-title flex flex-row w-[1070px] ml-[16px] max-[414px]:w-auto  max-[414px]:mb-[27px]">
          <img
            className="w-[85px] h-[85px] rounded-full max-[414px]:w-[66px] max-[414px]:h-[66px]"
            src={`${item.pictures[0]}?random=${Math.random()}`}
            alt={"img"}
          />
          <div className="title ml-[26px] font-nova max-[414px]:w-[278px] max-[414px]:ml-[19px] ">
            <p
              className=" h-min text-[20px] font-bold leading-[25px] text-[#3A4562] cursor-pointer hover:text-[#144ce6] mb-[8px] tracking-[-0.625px]
             max-[414px]:text-[18px] max-[414px]:leading-[24px] max-[414px]:font-normal max-[414px]:tracking-[-0.5625px] max-[414px]:mb-[5px]"
              onClick={() => getJobDetails(item)}
            >
              {item.title}
            </p>
            <p
              className="text-[#878D9D] mb-[8px] max-[414px]:mb-[7px]  max-[414px]:font-normal
            max-[414px]:leading-[25px] max-[414px]:tracking-[-0.236px]"
            >
              Department name • {item.name}
            </p>
            <div className="flex flex-row items-center">
              <img className="mr-[8px]" src={locationPng} alt="locationPng" />
              <p className="text-[#878D9D]">{item.address}</p>
            </div>
          </div>
        </div>

        <div
          className="stars-time flex flex-row  max-[414px]:order-first max-[414px]:mr-[16px] 
          max-[414px]:w-[278px] max-[414px]:place-content-between max-[414px]:mt-[14px] max-[414px]:self-end max-[414px]:mb-[14px]"
        >
          {/* stars */}
          <div className="stars flex flex-row self-center justify-end ml-auto mr-[32px] fill-[#38415D] w-[96px] max-[414px]:w-[10px] max-[414px]:m-0 max-[414px]:justify-start">
            {stars(item.stars || 0)}
          </div>
          {/* posted 1920 */}
          <div className="flex flex-col justify-between ml-[0] font-nova text-[#878D9D]">
            <div className="self-end max-[414px]:hidden ">
              <img src={rect} alt="img" />
            </div>
            <div className="text-end ">
              <p
                className="max-[414px]:text-[14px] max-[414px]:leading-[17px] max-[414px]:font-light 
              max-[414px]:tracking-[-0.206px]"
              >
                Posted {diffDates(item.createdAt)} days ago{" "}
              </p>
              <p className="max-[414px]:hidden">
                ({item.createdAt.slice(0, 10)})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
