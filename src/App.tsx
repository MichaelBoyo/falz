import { useState, useEffect } from "react";

function App() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-06-07T00:00:00");
    const now = new Date();
    //@ts-expect-error hello
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 ">
      <div className=" flex flex-col items-center justify-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-value md:text-4xl text-lg">
              “Before The Feast” Out June 7, 2024
            </div>
            <div className="stat-desc">
              <a target="_blank" href="https://x.com/falzthebahdguy">
                @falzthebahdguy
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5  h-max     ">
          <div>
            <span className="countdown font-mono md:text-5xl text-xl">
              {/* @ts-expect-error hello */}
              <span style={{ "--value": timeLeft.days || 0 }}></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono md:text-5xl text-xl">
              {/* @ts-expect-error hello */}
              <span style={{ "--value": timeLeft.hours || 0 }}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono md:text-5xl text-xl">
              {/* @ts-expect-error hello */}
              <span style={{ "--value": timeLeft.minutes || 0 }}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono md:text-5xl text-xl">
              {/* @ts-expect-error hello */}
              <span style={{ "--value": timeLeft.seconds || 0 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
      <div className="">
        <img
          className=" object-fit"
          src="https://pbs.twimg.com/media/GO2HHRSXkAE-oYW?format=jpg&name=large"
        />
      </div>
    </div>
  );
}

export default App;
