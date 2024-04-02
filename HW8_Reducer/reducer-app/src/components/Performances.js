import { Button } from "antd";
import { useContext, useState } from "react";
import { EventContext } from "../contexts/events-reducer";

export default function Performances({performances})
{
    const { addToFav} = useContext(EventContext);
    const [selectedPerf, setSelectedPerf] = useState(null);
    return(
        <>
      <h2>Performances page</h2>
      <div className="container">
      <div className="item-list">
        {performances.map((performance) => (
          <div className="item">
            <p key={performance.id}>{performance.title}</p>
            <div className="btns">
            <Button onClick={()=>setSelectedPerf(performance)}>more</Button>
            <Button onClick={addToFav}>+</Button>
            </div>
          </div>
        ))}
      </div>
      {selectedPerf && (
            <div className="details">
              <h3>Selected Concert Details</h3>
              <div className="selected-item-det">
              <img src={selectedPerf.photo} alt={selectedPerf.title} />
              <div>
              <p>Title: {selectedPerf.title}</p>
              <p>Duration: {selectedPerf.duration}</p>
              <p>Cost: {selectedPerf.cost}</p>
              </div>
              </div>
              <Button onClick={()=>setSelectedPerf(null)}>Hide</Button>
            </div>
          )}
      </div>
    </>
    )
}