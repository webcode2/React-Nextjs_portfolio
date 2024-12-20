import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import htmr from "htmr";
import TapSubTitle from "./TapSubTitle";
export default function Descriptions({ content, delivery, support }) {
  return (
    <div className="md:flex-row flex flex-col gap-10">
      <div className="text md:w-6/12">{htmr(content)}</div>
      <div className="others md:w-6/12">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="delivery">
            <TapSubTitle
              icon={<CiDeliveryTruck size={25} />}
              title="Free Delivery"
            />
            <p className="mt-3">{delivery}</p>
          </div>
          <div className="support">
            <div className="title flex gap-x-2 items-center font-semibold">
              <RiCustomerService2Fill size={25} />
              Customer Support
            </div>
            <p className="mt-3">{support}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
