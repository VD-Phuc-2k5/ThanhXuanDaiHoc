import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import "./Carousel.css";

const CarouselComponent = ({ datas }) => {
  return (
    <Carousel>
      {datas.map((data, idx) => (
        <Carousel.Item key={idx} id={idx}>
          <div className='overlay'></div>
          <img
            src={data.image}
            alt={data.title}
            className='carousel-img'
            loading='lazy'
          />
          <Carousel.Caption>
            <h3>{data.title}</h3>
            <p>{data.paragraph}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

CarouselComponent.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselComponent;
