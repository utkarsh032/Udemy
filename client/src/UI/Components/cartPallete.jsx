import React from "react";
import { FaTag } from "react-icons/fa6";


export const CartPallete = ({
  _id,
  title,
  author = "Unknown Author",
  rating = 0,
  reviews = 0,
  price,
  imageUrl,
  originalPrice,
}) => {
  return (
    <div className="py-4 border-b">

      <div className="rounded-lg flex items-start gap-4">
        <img src={imageUrl} alt={title} className="h-20 object-cover" />

        <div className="flex-1">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-gray-500">by {author}</p>
          <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
            <span className="font-bold">{rating}</span>
            <span>★</span>
            <span className="text-gray-500">({reviews.toLocaleString()})</span>
          </div>

          <div className="mt-2 text-sm text-gray-600">
            <span className="mr-4">10 total hours</span>
            <span className="mr-4">51 lectures</span>
            <span>Beginner</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button className="text-sm text-[#a855f7] hover:text-[#7e22ce] hover:underline">Remove</button>
          <button className="text-sm text-[#a855f7] hover:text-[#7e22ce] hover:underline">Save for Later</button>
          <button className="text-sm text-[#a855f7] hover:text-[#7e22ce] hover:underline">Move to Wishlist</button>
        </div>

        <div className="flex flex-col items-end ml-6">
          <p className="text-lg font-bold text-[#7e22ce] flex items-center gap-1">{price}<FaTag className="mt-1" /></p>
        </div>

      </div>

    </div>
  );
};
