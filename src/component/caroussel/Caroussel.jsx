

export default function Caroussel() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= "./src/assets/images/eau1.jpg" className="d-block w-100" width="50%" height={300} alt="eau1"/>
    </div>
    <div className="carousel-item">
      <img src="./src/assets/images/space1.jpg" className="d-block w-100" width="50%" height={300} alt="space1"/>
    </div>
    <div className="carousel-item">
      <img src="./src/assets/images/eau2.jpg" className="d-block w-100" width="50%" height={300} alt="eau2..."/>
    </div>
    <div className="carousel-item">
      <img src="./src/assets/images/space2.jpg" className="d-block w-100" width="50%" height={300} alt="space2..."/>
    </div>
    
  </div>
</div>
    </div>
  )
}
