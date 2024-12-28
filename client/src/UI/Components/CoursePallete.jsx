import { FaRegHeart } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const CoursePalette = ({
  title,
  author,
  rating,
  reviews,
  price,
  imageUrl,
  originalPrice,
}) => {
  const handleAddToCart = () => {
    console.log(`Added ${title} to cart`);
  };

  return (
    <div className="border p-4 transition-shadow">
      <div className="relative group">
        {/* Course Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-white border-2 border-gray-200 rounded-full w-10 h-10">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/10/13/dd5acbe4-9e3a-4ac3-8e6a-7f07fb1622a7.jpg"
            alt="Author Avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <Link
          to="/course"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
        >
          <FaRegCirclePlay className="text-white text-5xl drop-shadow-lg" />
        </Link>
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
          <p className="text-base font-semibold">{price}</p>
          <p className="text-[#838383] text-sm line-through">{originalPrice}</p>
        </div>

        <div className="mt-4 flex justify-between items-center gap-4">
          <button
            className="flex-1 px-4 py-2 hover:bg-[#7e22ce] text-white rounded bg-[#a855f7] transition-colors"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            className="border rounded-full h-10 w-10 border-gray-300 p-2 flex justify-center items-center hover:bg-gray-100 transition-colors"
          >
            <FaRegHeart className="text-gray-500 hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};
