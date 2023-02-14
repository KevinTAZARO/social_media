import "./rightBar.scss";
import PexelsDylan from "../../assets/pexels-dylan.jpg";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <span>Kev Admin</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <span>Kev Admin</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <span>Kev Admin</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Actvities</span>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <p>
                <span>Kev Admin</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <p>
                <span>Kev Admin</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <p>
                <span>Kev Admin</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <p>
                <span>Kev Admin</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <div className="online" />
              <span>Kev Admin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <div className="online" />
              <span>Kev Admin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <div className="online" />
              <span>Kev Admin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <div className="online" />
              <span>Kev Admin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <div className="online" />
              <span>Kev Admin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={PexelsDylan} alt="" />
              <div className="online" />
              <span>Kev Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
