import { Button } from "antd";
import { useContext, useState } from "react";
import { EventContext } from "../contexts/events-reducer";

export default function Concerts({ concerts }) {
  const {  addToFav } = useContext(EventContext);
  const [selectedConcert, setSelectedConcert] = useState(null);
  return (
    <>
      <h2>Concert page</h2>
      <div className="container">
        <div className="item-list">
          {concerts.map((concert) => (
            <div className="item">
              <p key={concert.id}>{concert.title}</p>
              <div className="btns">
                <Button onClick={() => setSelectedConcert(concert)}>
                  more
                </Button>
                <Button onClick={addToFav}>+</Button>
              </div>
            </div>
          ))}
        </div>
        
          {selectedConcert && (
            <div className="details">
              <h3>Selected Concert Details</h3>
              <div className="selected-item-det">
              <img src={selectedConcert.photo} alt={selectedConcert.title} />
              <div>
              <p>Title: {selectedConcert.title}</p>
              <p>Date: {selectedConcert.date}</p>
              <p>Cost: {selectedConcert.cost}</p>
              </div>
              </div>
              <Button onClick={()=>setSelectedConcert(null)}>Hide</Button>
            </div>
          )}
       
      </div>
    </>
  );
}
