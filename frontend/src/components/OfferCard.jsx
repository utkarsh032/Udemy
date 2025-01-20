import { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export default function OfferCard() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState('')

  const handleClose = () => {
    setIsVisible(!isVisible);
  };

  const offerDetails = [
    {
      price: 449,
      dueDate: "2025-12-31T20:59:59"
    }
  ];

  const calculateTimeLeft = (dueDate) => {
    let endDate = new Date(dueDate);
    let currDate = new Date();

    let timeDiff = endDate - currDate;

    if (timeDiff <= 0) return 'Expired';
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(offerDetails[0].dueDate));
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {isVisible && (
        <>
          {offerDetails.map((details, index) => (
            <div key={index} className='bg-[#eceb98] text-center  sm:p-2 md:p-2 lg:p-2 relative'>
              <button className='absolute top-0 right-2 font-bold text-xl sm:text-2xl' onClick={handleClose}><IoCloseSharp /></button>
              <p className=' font-normal sm:text-md md:text-md lg:text-lg  '>
                <b>Prices as low as ₹{details.price} | </b>Get new skills risk-free.
                <br />
                <b>Ends in {timeLeft}.</b>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
