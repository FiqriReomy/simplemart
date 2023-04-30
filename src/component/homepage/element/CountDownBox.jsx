import { useState, useEffect } from "react";

import flash_logo from "../../../assets/flash_logo.png";
const CountdownBox = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = timeLeft;
  const style = "w-[35px] h-[35px] flex_center md:p-2 bg-red-500 rounded-lg text-[10px] md:text-[15px]";

  return (
    <div>
      <div className="flex justify-center md:justify-start flex-wrap  font-bold  border-b-white">
        <div className="mb-0  flex_center flex-wrap gap-5 ">
          <div className="overflow-hidden w-[100px] flex_center  ">
            <img src={flash_logo} alt="flash_sale" />
          </div>
          <div className="flex w-[200px] gap-2 text-white">
            <div className={style}>{days}</div>
            <div className={style}>{hours}</div>
            <div className={style}>{minutes}</div>
            <div className={style}>{seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBox;
