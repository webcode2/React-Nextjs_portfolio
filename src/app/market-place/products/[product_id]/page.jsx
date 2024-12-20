"use client";
import { IoAddSharp, IoHeartOutline, IoRemoveSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

import React from "react";
import { CiClock2, CiDeliveryTruck } from "react-icons/ci";
import DeliveryAndReturn from "components/products/product_details/delivery_return";
import Descriptions from "components/products/product_details/Descriptions";
import ProductSlide from "components/products/product_details/ProductSlide";
import MayAlsoLikeProduct from "components/products/product_details/MayAlsoLikeProduct";
import BlackButton from "components/products/BlackButton";

const ProductDetails = () => {
  const images = [
    "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  ];

  const reviews = [
    {
      initial: "A",
      name: "Alice Johnson",
      date: "2024-12-10",
      content:
        "Absolutely loved this product for my puppy! High quality and great design.",
      rating: 5,
    },
    {
      initial: "B",
      name: "Bob Smith",
      date: "2024-12-08",
      content: "My pet enjoys it so much. Totally worth the purchase.",
      rating: 4,
    },
    {
      initial: "C",
      name: "Charlie Brown",
      date: "2024-12-06",
      content: "Good value for money. Fast delivery and excellent packaging.",
      rating: 4,
    },
  ];

  const title = "Comfortable Puppy Bed";
  const description =
    "Give your furry friend the ultimate comfort with our premium puppy bed. Designed with soft, breathable materials and a chic aesthetic.";
  const price = 49.99;

  return (
    <div className=" text-base-content max-w-6xl mx-auto">
      <div className="product_details w-full md:grid grid-cols-2 gap-x-10 px-5 lg:px-0 ">
        {/* Product Images */}
        <div className="mt-10 p-6 overflow-hidden rounded-lg">
          <ProductSlide images={images} />
        </div>
        <div className="">
          <div className="mt-10">
            <h1 className="text-2xl font-semibold mb-2 font-sans">{title}</h1>
            <p className="text-base mb-6">{description}</p>
            <div className="pricing flex  items-center gap-x-5">
              <p className="text-2xl font-semibold mb-4">${price}</p>
              <p className="text-sm text-gray-300 line-through font-medium mb-4">
                ${price + 80}
              </p>
            </div>

            <div className="mt-5">
              <div className="flex lg:space-x-4 flex-wrap gap-y-10 justify-center">
                <div className="count mr-4 md:mr-0">
                  <div className="flex items-center border rounded-lg gap-x-2">
                    <div className="subtr btn bg-transparent outline-0 border-none shadow-none hover:bg-neutral">
                      <IoRemoveSharp />
                    </div>
                    <div className="value py-3 px-6 ">0</div>
                    <div className="add btn bg-transparent outline-0 border-none shadow-none hover:bg-neutral">
                      <IoAddSharp />
                    </div>
                  </div>
                </div>

                <BlackButton title={"Add to Your Pack"} />

                <button className="btn btn-neutral  w-3/12 md:w-auto">
                  <IoHeartOutline size={25} />
                </button>
              </div>
            </div>
            <div className="delevery_info mt-12">
              <div className="estimated_days font-medium flex gap-x-2 items-center">
                <CiClock2 size={23} />
                Estimated delivery: 15 - 27 Mar, 2024
              </div>
              <div className="estimated_days font-medium mt-3 flex gap-x-2 items-center">
                <CiDeliveryTruck size={25} />
                Free shipping & returns: On all orders over $100.00
              </div>
            </div>
          </div>
          {/* Product Info */}
        </div>
      </div>

      <div className="mb-10 mt-20 px-5 w-full flex flex-wrap">
        <div
          role="tablist"
          className="tabs tabs-bordered w-full overflow-hidden flex-col flex-wrap "
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab lg:px-10 "
            aria-label="Description"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content w-full pt-6 lg:py-10 ">
            <Descriptions
              support={`Lorem ipsum dolor sit, amet consectetu      adipisicing elit. `}
              delivery={`Lorem ipsum dolor sit, amet consectetu      adipisicing elit. Excepturi ad cumque impedit quasi deleniti      obcaecati possimus commodi, pariatur molestias totam id culpa  `}
              content={`Lorem ipsum dolor sit, amet consectetu      adipisicing elit. Excepturi ad cumque impedit quasi deleniti      obcaecati possimus commodi, pariatur molestias totam id culpa      voluptas expedita? Rem reiciendis atque laboriosam! Quae,      provident.      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
        ad voluptatibus adipisci, qui incidunt soluta accusamus,
        expedita deserunt ea sint, aperiam porro dolore et eveniet sit
        sapiente? Deleniti, facilis aut!
      </p>`}
            />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab lg:px-10 "
            aria-label="Specifications"
          />
          <div role="tabpanel" className="tab-content py-10 ">
            <div className="">
              {/* Product Specifications */}
              <ul className="space-y-2 font-semibold list-disc">
                <li>Material: Soft Cotton and Polyester</li>
                <li>Size: 24&rdquo; x 18&rdquo; x 6&rdquo;</li>
                <li>Weight: 2.5 lbs</li>
                <li>Color: Beige</li>
                <li>Suitable for small to medium-sized pets</li>
              </ul>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab lg:px-10  whitespace-nowrap"
            aria-label="Reviewsed (2)"
          />
          <div role="tabpanel" className="tab-content py-10">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
            <div className="gap-8 lg:grid-cols-2 grid grid-cols-1">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                      <span className="text-lg font-bold">
                        {review.initial}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={starIndex < review.rating ? "#FFD700" : "#E5E7EB"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3.25l3.09 6.26 6.91 1.005-5 4.875 1.18 6.88-6.18-3.25-6.18 3.25L5 15.39 0 10.515 6.91 9.51 12 3.25z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 text-gray-800">{review.content}</p>
                </div>
              ))}
            </div>{" "}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab lg:px-10 hidden lg:block  whitespace-nowrap"
            aria-label="Delivery and returns"
          />
          <div role="tabpanel" className="tab-content py-10">
            <DeliveryAndReturn
              delivery={` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veniam repudiandae provident minima quis deleniti velit saepe distinctio iste amet obcaecati dignissimos, quasi adipisci voluptatibus ullam nulla vel eaque ad nam. Blanditiis quos ipsam suscipit nulla vitae accusamus ratione cumque earum nobis facere animi perferendis velit, temporibus ipsum voluptas eligendi nisi tenetur, beatae culpa exercitationem. Officia?`}
              returns={` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veniam repudiandae provident minima quis deleniti velit saepe distinctio iste amet obationem. Officia?`}
            />
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <div className=" px-5 pb-10">
        <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            {
              title: "Chew Toy",
              price: "$9.99",
              image:
                "https://images.pexels.com/photos/279731/pexels-photo-279731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            },
            {
              title: "Chew Toy",
              price: "$9.99",
              image:
                "https://images.pexels.com/photos/279731/pexels-photo-279731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            },
            {
              title: "Pet Blanket",
              price: "$14.99",
              image:
                "https://images.pexels.com/photos/54520/pexels-photo-54520.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            },
            {
              title: "Puppy Shampoo",
              price: "$12.99",
              image:
                "https://images.pexels.com/photos/4588048/pexels-photo-4588048.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            },
          ].map((item, index) => (
            <MayAlsoLikeProduct key={index} item={item} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
