import React from "react";

export const CoursePalette = ({
  title,
  author,
  rating,
  reviews,
  price,
  imageUrl,
  originalPrice,
}) => {
  return (
    <div className="border p-4 hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-32 object-cover "
        />
        <div className="absolute bottom-2 right-2 bg-white border-2 border-gray-200 rounded-full w-10 h-10">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/10/13/dd5acbe4-9e3a-4ac3-8e6a-7f07fb1622a7.jpg"
            alt="Author Avatar"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{author}</p>
        <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
          <span className="font-bold">{rating}</span>
          <span>★</span>
          <span className="text-gray-500">({reviews.toLocaleString()})</span>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <p className="text-base font-semibold ">₹{price}</p>
          <p className="text-[#838383] text-sm line-through">₹{originalPrice}</p>
        </div>
      </div>
    </div>
  );
};
