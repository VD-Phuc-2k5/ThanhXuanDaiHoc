import logo from "../../assets/icon/main-logo-icon.jpg";
import notification_icon from "../../assets/icon/notification-bell-icon.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo-wrap'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo.jpg' />
        </div>
        <span className='navbar-title'>Thanh Xuân Đại Học</span>
      </Link>
      <div className='navbar-notifications-wrap'>
        <div className='navbar-notifications'>
          <img src={notification_icon} alt='notification.svg' />
        </div>
        <div className='navbar-user'>
          <div>V</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
