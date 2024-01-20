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
            <a href="#" >
              <FaFacebook className='icon' />
            </a>
            <a href="https://www.instagram.com/folhafacil?igsh=eXJwZTJ0czZrMGh4" target='_blank' rel="external noreferrer">
              <RiInstagramFill className='icon' />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}