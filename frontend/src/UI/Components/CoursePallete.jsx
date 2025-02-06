import { FaExternalLinkAlt, FaRegHeart } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Api } from "../../context/Api";
import { useState } from "react";

export const CoursePalette = ({
  _id,
  title,
  author,
  rating,
  reviews,
  price,
  imageUrl,
  originalPrice,
}) => {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  const newURL = 'https://udemy-k17u.onrender.com/'

  const handleAddToCart = async (_id) => {
    setLoadingCart(true);
    try {
      const payload = { courseId: _id };
      const response = await Api.post(`${newURL}/user/cart`, payload);

      if (response.data.success) {
        toast.success('🦄 Added to Cart Successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.error(`Failed to add to cart: ${response.data.message || "Unknown error"}`, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "Something went wrong"}`, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setLoadingCart(false);
    }
  };

  const handleAddToWishlist = async (_id) => {
    setLoadingWishlist(true);
    try {
      const payload = { courseId: _id };
      const response = await Api.post('/api/wishlist', payload);

      if (response.data.success) {
        toast.success('🦄 Added to Wishlist Successfully!', {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.error(`Failed to add to wishlist: ${response.data.message || "Unknown error"}`, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "Something went wrong"}`, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setLoadingWishlist(false);
    }
  };

  return (
    <div className="border p-2 transition-shadow ">
      <div className="relative group">
        {/* Course Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full lg:h-48 md:h-32 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 sm:w-10 sm:h-10">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/10/13/dd5acbe4-9e3a-4ac3-8e6a-7f07fb1622a7.jpg"
            alt="Author Avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <Link
          to={`/course/get-courses/${_id}`}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
        >
          <FaExternalLinkAlt className="text-white text-4xl sm:text-5xl drop-shadow-lg" />
        </Link>
      </div>

      <div className="mt-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">{author}</p>
        <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
          <span className="font-bold">{rating}</span>
          <span>★</span>
          <span className="text-gray-500">({reviews.toLocaleString()})</span>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <p className="text-sm sm:text-base font-semibold">₹{price}</p>
          <p className="text-xs sm:text-sm text-[#838383] line-through">
            {originalPrice}
          </p>
        </div>

        <div className="mt-4 flex sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <button
            className={`w-full sm:flex-1 px-4 py-2 ${loadingCart ? "bg-gray-400" : "bg-[#a855f7] hover:bg-[#7e22ce]"} text-white rounded transition-colors`}
            onClick={() => handleAddToCart(_id)}
            disabled={loadingCart}
          >
            {loadingCart ? "Adding..." : "Add to cart"}
          </button>
          <button
            className={`border rounded-full h-10 w-10 border-gray-300 p-2 flex justify-center items-center ${loadingWishlist ? "bg-gray-100" : "hover:bg-gray-100"} transition-colors`}
            onClick={() => handleAddToWishlist(_id)}
            disabled={loadingWishlist}
          >
            <FaRegHeart className={`${loadingWishlist ? "text-gray-300" : "text-gray-500 hover:text-red-500"} transition-colors`} />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
