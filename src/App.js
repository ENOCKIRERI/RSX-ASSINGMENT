import React from "react";
import "./App.css";

const sunsetPictures = [
  { id: 1, src: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg" },
  { id: 2, src: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, src: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, src: "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 5, src: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

function App() {
  return (
    <div className="App">
      <h1>Best Sunset Pictures</h1>
      <div className="sunset-grid">
        {sunsetPictures.map(picture => (
          <img key={picture.id } src={ picture.src } alt="Sunset" />
        ))}
      </div>
    </div>
  );
}

export default App;
