import {
  intro,
  opening_paragraph as op,
  main_paragraph as mp,
  include_paragraph as ip,
} from "../../datas/data";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../../components/Carousel/Carousel";
import { Button } from "react-bootstrap";
import "./Home.css";

const Homes = () => {
  const navigate = useNavigate();
  const readMoreHandle = () => {
    const itemActive = document.querySelectorAll(".active.carousel-item");
    const id = itemActive[1].id;
    navigate(`/story${Number.parseInt(id) + 1}`);
  };

  return (
    <div className='home'>
      <CarouselComponent datas={intro} />
      {/* opening paragraph */}
      <div className='op-wrap'>
        <div className='op'>
          <div className='op-title'>
            <img src={op.icon} alt='op.svg' loading='lazy' />
            <div>
              <h3>{op.title}</h3>
            </div>
          </div>
          <p>{op.para_01}</p>
          <p>{op.para_02}</p>
        </div>

        <div className='op-images'>
          <img src={op.images[1]} alt='image5.jpg' loading='lazy' />
          <img src={op.images[0]} alt='image4.jpg' loading='lazy' />
        </div>
      </div>
      {/* main paragraph */}
      <div className='mp-wrap'>
        <div className='mp'>
          <div className='mp-title'>
            <img src={mp.icon} alt='op.svg' loading='lazy' />
            <div>
              <h3>{mp.title}</h3>
            </div>
          </div>
        </div>

        <CarouselComponent datas={mp.list_para} />

        <Button onClick={readMoreHandle}>Đọc thêm</Button>
      </div>
      {/* include paragraph */}
      <div className='op-wrap ip-wrap'>
        <div className='op-images ip-images'>
          <img src={ip.images[0]} alt='image5.jpg' loading='lazy' />
          <img src={ip.images[1]} alt='image4.jpg' loading='lazy' />
        </div>
        <div className='op ip'>
          <div className='op-title'>
            <div>
              <h3>{ip.title}</h3>
            </div>
          </div>
          <p>{ip.para_01}</p>
          <p>{ip.para_02}</p>
          <p>{ip.para_03}</p>
        </div>
      </div>
    </div>
  );
};

export default Homes;
