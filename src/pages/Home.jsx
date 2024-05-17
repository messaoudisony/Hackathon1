import { Link } from "react-router-dom";
import Caroussel from "../component/caroussel/Caroussel";

const Home = () => {
  const images = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg",
    "slide4.jpg",
    "slide5.jpg",
    "slide6.jpg",
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-2 col-sm-12"></div>
        <div className="col-md-4 col-sm-12 divImgHome">
          <img
            src="../../../src/assets/images/space3.jpg"
            alt=""
            className="imgHome"
          />
          <p>
            <Link to="/spaciaux">{`S'evader en hauteur`}</Link>
          </p>
        </div>
        <div className="col-md-4 col-sm-12 divImgHome">
          <img
            src="../../../src/assets/images/eau2.jpg"
            alt=""
            className="imgHome"
          />
          <p>
            <Link to="/sous-marin">{`S'evader sous l'eau`}</Link>
          </p>
        </div>
        <div className="col-md-2 col-sm-12"></div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-6 col-sm-12">
          <Caroussel images={images} />
        </div>
        <div className="col-md-3 col-sm-12"></div>
      </div>
    </div>
  );
};

export default Home;
