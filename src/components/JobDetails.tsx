import React, { FC } from "react";
import { IJobItem } from "../types/types";
import arrow from "../assets/Arrow.png";
import { useNavigate } from "react-router-dom";
import rect from "../assets/Rectangle 31.png";
import shape from "../assets/Shape icon.png";
import { diffDates } from "../utils/utils";
import MapPlace from "./MapPlace";
import locationPng from "../assets/Combined Shape.png";

interface JobDetailsProps {
  item: IJobItem;
}
const JobDetails: FC<JobDetailsProps> = ({ item }) => {
  const navigate = useNavigate();

  let salary = (item: IJobItem): string => {
    let x = item.salary.split("-");
    x = x.map((i) => i.slice(0, 2) + " 000");
    return x.join(" - ");
  };

  let lat = item.location.lat || 0;
  let long = item.location.long || 0;

  function backHandler(): void {
    navigate("/");
    console.log("backHandler");
  }

  return !item.id ? (
    <h3>Waiting....</h3>
  ) : (
    <div
      className="mx-auto mt-[47px] flex flex-row  max-w-[1280px] text-[#3A4562] 
    max-[414px]:flex-col max-[414px]:px-[15px] max-[414px]:mt-[24px] max-[414px]:mb-[37px] max-[414px]:bg-[#ffffff]"
    >
      <div className="flex flex-col w-[774px] mr-[80px] max-[414px]:w-[384px]">
        <div className="flex flex-col">
          <div className=" header flex flex-row max-[414px]:flex-col">
            <p className="font-nova text-[28px] font-bold leading-[34px] tracking-[.4133px] mr-[328px]  max-[414px]:mr-0">
              Job Details
            </p>
            <div className="border-b-2 mt-[12px] mb-[24px] max-[414px]:block max-[414px]:w-[382px]"></div>
            <div className="share flex flex-row">
              <img className="self-center mr-[8px] " src={rect} alt="img" />
              <p className="self-center font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px] mr-[24px]">
                Save to my list
              </p>
              <img
                className="self-center mr-[8px] font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px] "
                src={shape}
                alt="img"
              />
              <p className="self-center font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px] ">
                Share
              </p>
            </div>
          </div>
          <div className="border-b-2 mt-[9px] mb-[39px] max-[414px]:hidden"></div>
          <button className=" btn-apply text-[#FFFFFF] box-border self-start block border-2 rounded-[8px] bg-[#384564] hover:bg-[#00bcd46b] font-nova text-[12px] leading-[16px] font-semibold px-[30px] py-[18px]  max-[414px]:hidden">
            APPLY NOW
          </button>
          {/* name salary */}
          <div className="flex flex-row mt-[32px] font-nova font-bold place-content-between max-[414px]:flex-col">
            <p className="w-[500px] mr-[60px] mb-[7px] text-[24px] leading-[30px] tracking-[-0.75px] max-[414px]:w-[363px]">
              {item.title}
            </p>
            <div className="max-[414px]:flex max-[414px]:flex-row max-[414px]:place-content-between ">
              <p className="mb-[7px] text-[#38415d5b] hidden  max-[414px]:w-[160px]  max-[414px]:block">
                Posted {diffDates(item.createdAt)} days ago (
                {item.createdAt.slice(0, 10)})
              </p>
              <div className="flex flex-col">
                <p className="text-[20px] leading-[25px] tracking-[-0.63px] self-center max-[414px]:self-end max-[414px]:order-last">
                  &#8364; {salary(item)}
                </p>
                <p className="font-normal font-['Roboto'] text-[18px] leading-[24px] tracking-[-0.5625px] max-[414px]:self-end max-[414px]:font-nova ">
                  Brutto, per year
                </p>
              </div>
            </div>
          </div>
          {/* posted */}
          <p className="mb-[7px] text-[#38415d5b] max-[414px]:hidden">
            Posted {diffDates(item.createdAt)} days ago (
            {item.createdAt.slice(0, 10)})
          </p>
          {/* description */}
          <div className="font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px] mb-[60px] max-[414px]:w-[367px] max-[414px]:mt-[14px] max-[414px]:mb-[26px] ">
            <p>{item.description}</p>
            <h3 className="mt-[40px] mb-[12px] font-nova text-[20px] font-bold leading-[25px] tracking-[.63px]">
              Responsopilities
            </h3>
            <p>{item.description}</p>
            <h3 className="mt-[40px] mb-[12px] font-nova text-[20px] font-bold leading-[25px] tracking-[.63px]">
              Compensation & Benefits:
            </h3>
            <p>Our physicians enjoy a wide range of benefits, including:</p>
            <ul className="list-[square] max-[414px]:ml-[18px] ">
              <li>Very competitive compensation package with bonuses</li>
              <li> Medical, Dental, and Vision Insurance</li>
              <li>Occurrence-based Malpractice Coverage</li>
              <li>
                Short-term and Long-term Disability Insurance and life insurance
              </li>
            </ul>
          </div>
          <button className=" text-[#FFFFFF] box-border self-start block border-2 rounded-[8px] bg-[#384564] hover:bg-[#00bcd46b] font-nova text-[12px] leading-[16px] font-semibold px-[30px] py-[18px] mb-[86px] max-[414px]:mx-auto">
            APPLY NOW
          </button>

          {/*  Additional info */}
          <div className=" flex flex-col">
            <div className="w-[704px] max-[414px]:w-auto ">
              <p className="font-nova text-[28px] font-bold leading-[34px] tracking-[.4133px]">
                Additional info
              </p>
              <div className="border-b-2 mt-[9px] mb-[39px]  max-[414px]:mb-[15px]"></div>
              <p className="font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px]">
                Employment type
              </p>
              <div className="flex flex-row mt-[10px] mb-[23px]">
                {item.employment_type.map((type, index) => (
                  <div
                    className=" flex justify-center items-center w-[222px] h-[49px] border-2 border-[#55699E4D] bg-[#E1E6F4] mr-[8px] rounded-[8px] color-[#55699e] font-nova text-[px] font-bold leading-[px] tracking-[-.46px]"
                    key={index + "empltype"}
                  >
                    <p>{type}</p>
                  </div>
                ))}
              </div>
              <p className="font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px]">
                Benefits
              </p>
              <div className="flex flex-row mt-[10px]">
                {item.benefits.map((type, index) => (
                  <div
                    className="flex justify-center items-center w-[222px] h-[49px] border-2 border-[#FFCF00] bg-[#FFF8D9] mr-[8px] rounded-[8px] color-[background: #988B49;
] font-nova text-[px] font-bold leading-[px] tracking-[-.46px]"
                    key={index + "Benefits"}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>

            {/* img */}
            <div className="mt-[87px] w-[702px] mb-[89px]  max-[414px]:order-first  max-[414px]:mt-0  max-[414px]:w-auto max-[414px]:mb-[63px]">
              <p className="font-nova text-[28px] font-bold leading-[34px] tracking-[.4133px] mb-[9px] ">
                Attached images
              </p>
              <div className="border-b-2"></div>
              <div className="flex flex-row mt-[21px]  max-[414px]:flex-wrap">
                {item.pictures.map((img, index) => (
                  <img
                    key={index + "imgdet"}
                    className="w-[209px] h-[115px] rounded-[8px] mr-[10px]  max-[414px]:w-[182px]  
                    max-[414px]:mb-[10px]"
                    src={`${img}?random=${Math.random()}`}
                    alt={"img"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          className="cursor-pointer relative left-[-12%] box-border flex flex-row self-start items-center py-[16px] border-2 rounded-[8px] bg-[#38456430] hover:bg-[#00bcd46b] max-[414px]:hidden"
          onClick={() => backHandler()}
        >
          <img className="ml-[23px]" src={arrow} alt="arrow"></img>
          <p className="ml-[19px] mr-[26px] font-nova text-xs font-semibold leading-4 text-[#3A4562]">
            RETURN TO JOB BOARD
          </p>
        </button>
      </div>

      {/* map */}
      <div className=" max-[414px]:mt-[63px]  max-[414px]:mx-auto max-[414px]:w-[383px]">
        <p
          className="font-nova text-[28px] font-bold leading-[34px] tracking-[.4133px] mb-[9px] hidden  
        max-[414px]:block "
        >
          Contacts
        </p>
        <div className="border-b-2"></div>
        <div
          className="w-[402px] max-h-[436px] bg-[#2A3047] flex flex-col justify-between  
        max-[414px]:w-[372px] max-[414px]:mx-auto max-[414px]:mt-[21px]"
        >
          <div className=" ml-[62px] mt-[31px] mb-[26px]">
            <div className="text-[#E7EAF0] font-nova text-[20px] font-bold leading-[25px] tracking-[.63px] mb-[8px]">
              <p>Department name.</p>
              <p>{item.name}</p>
            </div>

            {/* adress */}
            <div className="text-[#E8EBF3]">
              <div className="flex flex-row items-center">
                <img className="mr-[8px]" src={locationPng} alt="locationPng" />
                <p className="">{item.address}</p>
              </div>
              <p className="font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px]">
                {item.phone}
              </p>
              <p className="font-['Roboto'] text-[18px] leading-[24px] font-normal tracking-[-0.5625px]">
                {item.email}
              </p>
            </div>
          </div>
          <MapPlace lat={lat} long={long} />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
