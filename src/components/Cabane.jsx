import { useState } from "react";

import "../App.css";
import data from "../../sky.json";

const TreeHouses = () => {
  const [isDescriptionReduced, setIsDescriptionReduced] = useState(
    data.housesData.map(() => true)
  );

  const toggleDescription = (index) => {
    setIsDescriptionReduced((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="container">
      {data.housesData.map((house, index) => (
        <div key={house.id} className="house-card">
          <img
            src={house.image_path}
            alt={house.image_name}
            className="house-image"
          />
          <div className="house-content">
            <div className="house-title">{house.image_name}</div>
            <div className="house-address">{house.address}</div>

            <div className="house-description">
              {isDescriptionReduced[index]
                ? `${house.description.slice(0, 50)}...`
                : house.description}
              <button
                className="buttonDisplay"
                onClick={() => toggleDescription(index)}
              >
                {isDescriptionReduced[index] ? "...plus" : "...moins"}
              </button>
            </div>
          </div>
          <div className="house-price">{house.price} €</div>
        </div>
      ))}
    </div>
  );
};

export default TreeHouses;
