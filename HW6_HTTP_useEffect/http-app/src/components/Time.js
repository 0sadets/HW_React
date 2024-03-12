import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "antd";

export default function Time() {
  let [dataTime, setData] = useState({});
  //const shortInfo = document.getElementsByClassName("short-info");
  //const longInfo = document.getElementsByClassName("long-info");
    useEffect(()=>{
        console.log("effect: ");
        loadTime();
    }, {dataTime});

    useEffect(()=>{
        console.log("effect start: ");
        loadTime();
    }, {});

  const loadTime = () => {
    const url = "http://worldtimeapi.org/api/timezone/Europe/Kyiv";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("Data: ", data);
      });
  };
function LongInfo(){
    // return(
    // <ol className="long-info">
    //   <li>Data&Time: {dataTime.datetime}</li>
    //   <li>Day Of Week: {dataTime.day_of_week}</li>
    //   <li>Time Zone: {dataTime.timezone}</li>
    //   <li>Week Number: {dataTime.week_number}</li>
    //   <li>Day Of Year: {dataTime.day_of_year}</li>
    //   </ol>
    // );
    // shortInfo+=`
    // <li>Week Number: {dataTime.week_number}</li>
    // <li>Day Of Year: {dataTime.day_of_year}</li>
    // `
}
  return (
    <>
      <h2>Current Time: </h2>
      
      
      <ol className="short-info">
      <li>Date&Time: {dataTime.datetime}</li>
      <li>Day Of Week: {dataTime.day_of_week}</li>
      <li>Time Zone: {dataTime.timezone}</li>
      </ol>
      {/* <ol className="long-info">
      <li>Data&Time: {dataTime.datetime}</li>
      <li>Day Of Week: {dataTime.day_of_week}</li>
      <li>Time Zone: {dataTime.timezone}</li>
      <li>Week Number: {dataTime.week_number}</li>
      <li>Day Of Year: {dataTime.day_of_year}</li>
      </ol> */}
      
      <div>
      <h4>Viewing Mode:</h4>
      <Button onClick={loadTime} type="primary">
        Short
      </Button>
      <Button  type="primary">Expanded</Button>
      </div>
    </>
  );
}
