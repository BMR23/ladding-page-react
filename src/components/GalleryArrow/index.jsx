import { isMobile } from 'react-device-detect';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import P from 'prop-types';
import './styles.css';


export const GalleryArrow = ({ func }) => {

  if (!isMobile) {
    return (
      <div className="content-controls">
        <div data-name='left' className='content-control' onClick={(e) => func(e.target.dataset.name)}>
          <IoIosArrowBack data-name='left' className='control item-1' />
        </div>
        <div data-name='right' className='content-control' onClick={(e) => func(e.target.dataset.name)}>
          <IoIosArrowForward data-name='right' className='control item-2' />
        </div>
      </div>
    )
  }
  return
}

GalleryArrow.propTypes = {
  func: P.func,
}