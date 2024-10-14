import PropTypes from "prop-types";
import errorImg from "../../assets/images/errorPage.jpg";
import "./StoryFrame.css";

const StoryFrame = ({ storyInfo }) => {
  const { story_list, title } = storyInfo.stories;
  const storyIndex = storyInfo.id;

  const story = story_list[storyIndex];

  if (!story) {
    return (
      <div className='error'>
        <img src={errorImg} alt='img.jpg' />
      </div>
    );
  }

  return (
    <div className='storyFrame'>
      {/* Header */}
      <div className='storyFrame-header'>
        <img src={story.image} alt='Image' />
        <div className='StoryFrame-overlay'>
          <h3>{title}</h3>
          <p>{story.title}</p>
        </div>
      </div>
      {/* Paragraphs */}
      <div className='storyFrame--para_list'>
        {story.para_list.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
};

StoryFrame.propTypes = {
  storyInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    stories: PropTypes.shape({
      title: PropTypes.string,
      story_list: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          image: PropTypes.string,
          para_list: PropTypes.arrayOf(PropTypes.string),
          date_update: PropTypes.string.isRequired,
        })
      ),
    }),
  }).isRequired,
};

export default StoryFrame;
