import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "antd";

export default function Time() {
  let [dataTime, setData] = useState("");
  const [isExtended, setIsExtended] = useState(false);
  useEffect(() => {
    console.log("effect: ");
    loadTime();
  }, []);

  useEffect(() => {
    console.log("effect start: ");
    loadTime();
  }, [isExtended]);

  const loadTime = () => {
    const url = "http://worldtimeapi.org/api/timezone/Europe/Kyiv";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const dateTime = new Date(data.utc_datetime);
        const dateDay = new Date(data.Date);

        if (isExtended === false) {
          setData(dateTime.toLocaleString());
        } else {
          setData(
            dateTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          );
        }
        console.log("Data: ", data);
      });
  };

  return (
    <>
      <h2>Current Time: </h2>

      <div id="time">{dataTime}</div>
      <ol className="short-info"></ol>

      <div>
        <h4>Viewing Mode:</h4>
        <Button onClick={() => setIsExtended(true)} type="primary">
          Short
        </Button>
        <Button onClick={() => setIsExtended(false)} type="primary">
          Expanded
        </Button>
      </div>
    </>
  );
}
