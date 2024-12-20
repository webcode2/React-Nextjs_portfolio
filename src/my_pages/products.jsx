import React from "react";
import Carosel from "./homepage/carosel";
import ShowcaseProducts from "components/products/ShowcaseProducts";
import { CiHeart } from "react-icons/ci";
import BlackButton from "components/products/BlackButton";

const ProductCard = ({ product }) => {
  const { name, mediaType, mediaSrc, price, discount, rating, reviews, tags } =
    product;

  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div className="bg-white rounded-lg overflow-hidden  transition-shadow duration-300">
      <div className="relative w-full">
        {mediaType === "image" ? (
          <img src={mediaSrc} alt={name} className="w-full  object-cover" />
        ) : (
          <video
            src={mediaSrc}
            controls
            className="w-full h-full object-cover"
          ></video>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold  mb-2">{name}</h3>

        <div className="flex items-center mb-3">
          <p className="text-gray-700 text-lg font-bold">${discountedPrice}</p>
          {discount > 0 && (
            <p className="text-gray-500 line-through ml-2">
              ${price.toFixed(2)}
            </p>
          )}
        </div>

        {/* <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              &#9733;
            </span>
          ))}
          <p className="ml-2 text-gray-500">({reviews} reviews)</p>
        </div> */}

        <div className="flex items-center space-x-3 mb-4">
          <BlackButton title={"Bring Home"} />
          <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
            <CiHeart size={25} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductListingPage = () => {
  const products = [
    {
      name: "Golden Retriever",
      breed: "Golden Retriever",
      age: 1,
      weight: "1.5kg",
      categories: "",
      sub_categories: "",

      mediaType: "image",
      mediaSrc:
        "https://res.cloudinary.com/dozd0nyze/image/upload/v1734304101/puppy_app/products/Golden-Retriever_jdcavu.jpg",
      price: 999.99,
      discount: 20,
      rating: 4,
      reviews: 120,
      tags: ["Pets", "Security", "Dogs"],
    },
    {
      name: "Shiba-Inu",
      mediaType: "image",
      mediaSrc:
        "https://res.cloudinary.com/dozd0nyze/image/upload/v1734304200/puppy_app/products/Shiba-Inu_xa90xt.jpg",
      price: 99.99,
      discount: 20,
      rating: 4,
      reviews: 120,
      tags: ["Security", "Local Dogs", "Pet"],
    },
    {
      name: "Royal Choice Puppy ",
      mediaType: "image",
      mediaSrc:
        "https://res.cloudinary.com/dozd0nyze/image/upload/v1734303715/puppy_app/products/Royal-Choice-Puppy_c9ugky.jpg",
      price: 999.99,
      discount: 20,
      rating: 4,
      reviews: 120,
      tags: ["Food", "dog", "Top Rated"],
    },
    {
      name: "Rottweiler",
      mediaType: "image",
      mediaSrc:
        "https://res.cloudinary.com/dozd0nyze/image/upload/v1734304147/puppy_app/products/Rottweiler-1-1_exkizs.jpg",
      price: 299.99,
      discount: 10,
      rating: 5,
      reviews: 45,
      tags: ["Security", "speed"],
    },
    {
      name: "Rottweiler",
      mediaType: "image",
      mediaSrc:
        "https://res.cloudinary.com/dozd0nyze/image/upload/v1734303883/puppy_app/products/Alaskan-Malamute-1_i6ufvy.jpg",
      price: 299.99,
      discount: 10,
      rating: 5,
      reviews: 45,
      tags: ["Security", "speed"],
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen">
      {/* TODO  list few most wanted products */}
      <div className="top_listing"></div>
      {/* Landing Campaign */}
      <Carosel />

      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-base font-medium mt-10 mb-6">Puppies </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="featured mt-5">
          <ShowcaseProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
