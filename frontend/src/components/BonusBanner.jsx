import BonusBannerBG from '../assets/bonusAdd.png';

export default function BonusBanner() {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={BonusBannerBG}
        alt="BonusBannerBG"
        className=""
      />
      <div
        className="absolute left-2 md:left-10 lg:left-20 bg-white  p-2 md:p-4 lg:p-6 w-3/5 md:w-1/2 lg:w-1/3 shadow-md "
      >
        <h1 className="text-base md:text-xl lg:text-3xl font-bold mb-0 md:mb-2 lg:mb-4 ">
          It's the last day for this bonus sale
        </h1>
        <p className="text-xs sm:text-base lg:text-lg text-[#2d2f31] line-clamp-2">
          Get courses from ₹549 — plus save an extra 15% with promo code <b>15BONUSDEC24</b>.
        </p>
      </div>
    </div>
  );
}
