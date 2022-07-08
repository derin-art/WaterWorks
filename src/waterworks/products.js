import React from "react";
import SachetWater from "./Media/SachetWater.jpg";
import LimeWater from "./Media/LimeWater.jpg";
import WaterDispenser1 from "./Media/WaterDispenser1.jpg";
import WaterBottle from "./Media/WaterBottle3.jpg";

export default function Products() {
  return (
    <div className="w-full font-Anek pb-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row md:mr-32 md:mb-10">
          <img src={LimeWater} className="h-[300px]"></img>
          <div className="text-3xl text-green-400 p-6 rounded-lg">
            LimeWater
            <div className="text-sm md:w-96 w-72 text-black">
              Refreshing and full of Citrus goodness.
            </div>
          </div>
        </div>

        <div className="md:mr-32 flex flex-col md:flex-row items-center justify-center md:mb-10">
          <img src={WaterBottle} className="w-48 md:w-[350px]"></img>
          <div className="text-3xl text-green-400 p-4">
            Bottled Water
            <div className="text-sm w-72 md:w-96 text-black">
              Our flagship, Distilled, Purified and packed infused with minerals
              to keep you moving and healthy.
            </div>
          </div>
        </div>
        {/* <div className="md:mr-32 flex flex-col md:flex-row items-center justify-center">
          <img src={WaterDispenser1} className="w-96 p-6"></img>
          <div className="text-3xl text-green-400 p-4">
            Dispeneser Water
            <div className="text-sm w-72 md:w-96 text-black">
              For the family and Office, contact us to make an order for
              Dispeneser water.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
