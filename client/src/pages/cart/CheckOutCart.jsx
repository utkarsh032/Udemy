import { IoMdClose } from "react-icons/io";

export const CheckOutCart = () => {
  return (
    <div className="w-2/5 h-1/2 translate-y-1/3 p-6 border rounded-lg shadow-md bg-white">

      <div className="mb-6">
        <p className="text-lg font-bold text-gray-600">Total:</p>
        <span className="text-2xl font-bold text-gray-900">$ 0.000</span>
        <button className="mt-4 w-full bg-[#7e22ce] text-white py-2 hover:bg-[#a855f7] transition-colors font-bold">
          Checkout
        </button>
      </div>

      <div>
        <p className="text-lg font-bold">Promotions</p>
        <div className="mt-4 p-4 border flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-800">
              <b>KEEPLEARNING</b> is applied
            </p>
            <p className="text-xs text-gray-500">Udemy Coupon</p>
          </div>
          <button className="text-lg">
            <IoMdClose />
          </button>
        </div>

        <form className="mt-6 flex">
          <input
            type="text"
            placeholder="Enter Coupon"
            className="flex-1 border p-2 focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
          />
          <input
            type="submit"
            value="Apply"
            className="bg-[#a855f7] text-white px-4 py-2 hover:bg-[#a855f7] transition-colors cursor-pointer font-bold"
          />
        </form>
      </div>
    </div>
  );
};
