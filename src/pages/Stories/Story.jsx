import PropTypes from "prop-types";
import StoryFrame from "../../components/StoryFrame/StoryFrame";
import searchIcon from "../../assets/icon/search_icon.svg";
import HomeIcon from "../../assets/icon/home-icon.svg";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Story.css";

const Story = ({ Info }) => {
  const { stories } = Info;
  const storyList = stories.story_list;

  const location = useLocation();
  const navigate = useNavigate();
  const currentStoryId =
    parseInt(location.pathname.split("/story")[1], 10) || 1;

  const prevIdx = currentStoryId - 1;
  const nextIdx = currentStoryId + 1;

  const handlePrevClick = () => {
    if (prevIdx >= 1) {
      navigate(`/story${prevIdx}`);
    }
  };

  const handleNextClick = () => {
    if (nextIdx <= storyList.length) {
      navigate(`/story${nextIdx}`);
    }
  };

  return (
    <>
      <StoryFrame storyInfo={Info} />
      <div className='StoryFrame-nav-wrap'>
        <div className='StoryFrame-nav'>
          <Button disabled={prevIdx < 1} onClick={handlePrevClick}>
            {`< Prev`}
          </Button>
          <Link to='/' className='HomeIcon-wrap'>
            <img src={HomeIcon} alt='home.svg' className='homeIcon' />
          </Link>
          <div className='StoryFrame-nav-searchbox'>
            <input
              type='text'
              placeholder='Search...'
              aria-label='Search stories'
            />
            <img src={searchIcon} alt='search icon' />
          </div>
          <Button
            disabled={nextIdx > storyList.length}
            onClick={handleNextClick}>
            {`Next >`}
          </Button>
        </div>
        <div className='StoryFrame-story-list'>
          <h3>Danh Sách Chương</h3>
          {storyList.length > 0 ? (
            <div className='story-list-items'>
              {storyList.map((item, index) => (
                <Link
                  to={`/story${index + 1}`}
                  className='story-list-item'
                  key={index}
                  aria-label={`Go to chapter ${item.title}`}>
                  <p className='story-list-item-title'>{item.title}</p>
                  <p className='story-list-item-DateUpdate'>
                    {item.date_update}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p>No chapters available.</p>
          )}
        </div>
      </div>
    </>
  );
};

Story.propTypes = {
  Info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    stories: PropTypes.shape({
      title: PropTypes.string.isRequired,
      story_list: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          para_list: PropTypes.arrayOf(PropTypes.string).isRequired,
          date_update: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Story;
