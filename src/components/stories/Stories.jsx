import "./stories.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Stories = () => {

const {currentUser} = useContext(AuthContext);


  const stories = [
    {
      id: 1,
      name: "Kev Admin",
      img: "https://images.pexels.com/photos/2875617/pexels-photo-2875617.jpeg?cs=srgb&dl=pexels-marko-blazevic-2875617.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Kev Admin",
      img: "https://images.pexels.com/photos/2875617/pexels-photo-2875617.jpeg?cs=srgb&dl=pexels-marko-blazevic-2875617.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Kev Admin",
      img: "https://images.pexels.com/photos/2875617/pexels-photo-2875617.jpeg?cs=srgb&dl=pexels-marko-blazevic-2875617.jpg&fm=jpg",
    },
    {
      id: 4,
      name: "Kev Admin",
      img: "https://images.pexels.com/photos/2875617/pexels-photo-2875617.jpeg?cs=srgb&dl=pexels-marko-blazevic-2875617.jpg&fm=jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
