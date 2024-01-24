import './styles.css';
import P from 'prop-types';
import semFoto from './semFoto.jpg';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";



export const Card = ({ stars = 10, name, url_image = semFoto, text }) => {

  return (
    <div className='card'>
      <div className='container-top'>
        <img src={url_image} alt="teste" />
        <div className="name">
          <nav>{name}</nav>
          {stars == 10 &&
            <div className='stars'>
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStar color='white' />
              {/* <FaRegStar color='#FCD53F' /> */}
            </div>
          }
          {stars == 9 &&
            <div className='stars'>
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStarHalfAlt color='white' />
            </div>
          }
          {stars == 8 &&
            <div className='stars'>
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStar color='white' />
              <FaStar color='white' />
              <FaRegStar />
            </div>
          }
        </div>
      </div>
      <div className="card-description">
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

// Card.defaultProps = {
//   name: 'Carolina',
//   url_image: ImageTeste
// }

Card.propTypes = {
  stars: P.number.isRequired,
  name: P.string.isRequired,
  url_image: P.string.isRequired,
  text: P.string.isRequired,
}