import "../App.css";
import data from "../../sky.json";

const HobbitHouses = () => {
  return (
    <div className="container">
      {data.housesData.map((house) => (
        <div key={house.id} className="house-card">
          <img
            src={house.image_path}
            alt={house.image_name}
            className="house-image"
          />
          <div className="house-content">
            <div className="house-title">{house.image_name}</div>
            <div className="house-address">{house.address}</div>
            <div className="house-description">{house.description}</div>
            <div className="house-price">{house.price} €</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HobbitHouses;
