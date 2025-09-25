import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`Cheval ${i + 1}`}
              style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
