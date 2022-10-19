import { useEffect, useState } from "react";

const CountDown: React.FC<{ futureDate: Date }> = ({ futureDate }) => {
  const [sec, setSec] = useState<any>("00");
  const [min, setMin] = useState<any>("00");
  const [hour, setHour] = useState<any>("00");
  useEffect(() => {
    var inter = setInterval(() => {
      const secs = (futureDate.getTime() - new Date().getTime()) / 1000;
      if (secs > 0) {
        let hours = Math.floor(secs / 60 / 60);
        if (hours >= 10) {
          setHour(hours);
        } else {
          setHour(`0${hours}`);
        }

        let mins = Math.floor((secs - hours * 60 * 60) / 60);
        if (mins >= 10) {
          setMin(mins);
        } else {
          setMin(`0${mins}`);
        }

        let seconds = Math.floor(secs - (hours * 60 * 60 + mins * 60));
        if (seconds >= 10) {
          setSec(seconds);
        } else {
          setSec(`0${seconds}`);
        }
      }
    }, 1000);
    return () => {
      clearInterval(inter);
    };
  }, []);

  return (
    <div className="d-flex day__products-counter">
      <div id="hours" className="day__products-counter--item text-center">
        {hour}
      </div>
      <div className="day__products-counter--separate">:</div>
      <div id="minutes" className="day__products-counter--item text-center">
        {min}
      </div>
      <div className="day__products-counter--separate">:</div>
      <div id="seconds" className="day__products-counter--item text-center">
        {sec}
      </div>
    </div>
  );
};

export default CountDown;
