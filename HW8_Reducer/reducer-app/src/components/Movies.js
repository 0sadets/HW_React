import { Button } from "antd";
import { EventContext } from "../contexts/events-reducer";
import { useContext, useState } from "react";

export default function Movies({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { addToFav } = useContext(EventContext);
  

  return (
    <>
      <h2>Movie page</h2>
      <div className="container">
        <div className="item-list">
          {movies.map((movie) => (
            <div className="item">
              <p key={movie.id}>{movie.title}</p>
              <div className="btns">
                <Button onClick={()=>setSelectedMovie(movie)}>more</Button>
                <Button onClick={addToFav}>+</Button>
              </div>
            </div>
          ))}
        </div>
        {selectedMovie && (
            <div className="details">
              <h3>Selected Movie Details</h3>
              <div className="selected-item-det">
              <img src={selectedMovie.photo} alt={selectedMovie.title} />
              <div>
              <p>Title: {selectedMovie.title}</p>
              <p>Director: {selectedMovie.director}</p>
              <p>Duration: {selectedMovie.duration}</p>
              </div>
              </div>
              <Button onClick={()=>setSelectedMovie(null)}>Hide</Button>
            </div>
          )}
      </div>
    </>
  );
}
