import { TbTruckReturn } from "react-icons/tb";
import React from "react";
import htmr from "htmr";
import TapSubTitle from "./TapSubTitle";
import { CiDeliveryTruck } from "react-icons/ci";

export default function DeliveryAndReturn({ delivery, returns }) {
  return (
    <div className="flex-col flex md:flex-row gap-10">
      <div className="md:w-6/12">
        <TapSubTitle icon={<CiDeliveryTruck size={25} />} title="Delivery" />
        <div className="pt-3"> {htmr(delivery)}</div>
      </div>
      <div className=" md:w-6/12 ">
        <TapSubTitle icon={<TbTruckReturn size={25} />} title="Return" />
        <div className="pt-3"> {htmr(returns)}</div>
      </div>
    </div>
  );
}
