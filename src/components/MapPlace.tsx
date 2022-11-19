import React, { FC } from "react";

interface IMapProps {
  lat: number;
  long: number;
}

const MapPlace: FC<IMapProps> = ({ lat, long }) => {
  // console.log(lat, long);
  return (
    <div className=" cursor-pointer w-[402px] max-[414px]:w-[372px]">
      <img
        width="402"
        height="218"
        src={`https://maps.geoapify.com/v1/staticmap?style=dark-matter-brown&width=402&height=218&center=lonlat:${long},${lat}&zoom=10.2&marker=lonlat:${long},${lat};color:%23ff9100;size:medium&apiKey=4b2ae05e243849e4a6e55245055766e6`}
        alt="map"
      />
    </div>
  );
};

export default MapPlace;
