import './styles.css';
import P from 'prop-types';
import ImageTeste from './foto1.png'

export const Card = ({ name, url_image }) => {
  return (
    <div className='card'>
      <div className='container-top'>
        <img src={url_image} alt="teste" />
        <div className="name">
          <nav>{name}</nav>
          <div className='stars'>⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Repudiandae mollitia quas commodi facere animi tempore amet
          laudantium aperiam iure, ipsam voluptate blanditiis ipsum itaque
          nulla qui, facilis provident sit consectetur.
        </p>
      </div>
    </div>
  )
}

Card.defaultProps = {
  name: 'Carolina',
  url_image: ImageTeste
}

Card.propTypes = {
  name: P.string.isRequired,
  url_image: P.string.isRequired,
}