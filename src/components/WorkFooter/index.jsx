import './styles.css';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import logo from './img/P1LOGO.png';

export const WorkFooter = () => {
  return (
    <div className="footer-wrapper bg-color">
      <footer id='footer'>
        <div className="footer-items-container">
          <nav className='footer-title'>
            <img
              className='img-logo'
              src={logo}
              alt="Logo da empresa Folha Fácil"
            />
          </nav>
          <nav className='footer-description'>© 2023 Folha Fácil - Todos os Direitos Reservados.</nav>
          <nav className="icons">
            <FaFacebook color='white' className='icon' />
            <RiInstagramFill color='white' className='icon' />
          </nav>
        </div>
      </footer>
    </div>
  )
}