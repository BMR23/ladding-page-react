import "./styles.css";
import { useEffect, useRef, useState } from 'react';
import { Card } from '../Card';
import foto1 from './img/foto1.png';
import foto2 from './img/foto2.jpeg';
import foto3 from './img/foto3.jpeg';
import { GalleryArrow } from '../GalleryArrow';
import { isMobile } from 'react-device-detect';


export const Gallery = () => {

  let [permission, setPermission] = useState(false);
  let [currentItem, setCurrentItem] = useState(0);
  let itemsRef = useRef([]);
  const items = document.querySelectorAll('.img');
  const maxItems = items.length;

  useEffect(() => {
    itemsRef.current = document.querySelectorAll('.img');
    setCurrentItem(0);

    if (!isMobile) {
      const galleryWrapper = document.querySelector('.gallery-wrapper');
      if (galleryWrapper) galleryWrapper.setAttribute('data-mobile', 'true')
    }
  }, []);

  useEffect(() => {
    const contentControls = document.querySelector('.content-controls')

    if (contentControls) {
      items.forEach((img) => {
        img.classList.add('opacity-9');
      })

    }
  }, [items]);

  useEffect(() => {
    if (!permission) return

    if (itemsRef.current && itemsRef.current.length > 0) {
      itemsRef.current.forEach((img, index) => {
        if (index !== currentItem) {
          img.classList.remove("current-img");
        } else {
          img.classList.add("current-img");
          img.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "center",
          });
        }
      });
    }
  }, [currentItem, permission]);

  const controlMove = (name) => {

    if (!name) return
    setCurrentItem(prevItem => {
      let newItem;
      if (prevItem === 2) name == 'left' ? newItem = 1 : newItem = 3;
      else if (name === 'left') {
        newItem = prevItem - 1;
        if (newItem < 0) return maxItems - 1;
      } else if (name === 'right') {
        newItem = prevItem + 1;
        if (newItem >= maxItems) return 0;
      }
      return newItem;
    })
  };

  const infoCard = [
    {
      name: 'Hello',
      url_image: foto1
    },
    {
      name: 'Hello',
      url_image: foto2
    },
    {
      name: 'Hello',
      url_image: foto3
    },
    {
      name: 'Hello',
      url_image: foto1
    },
    {
      name: 'Hello',
      url_image: foto2
    },
    {
      name: 'Hello',
      url_image: foto3
    },
  ]

  return (
    <section id="depositions" onMouseOver={() => setPermission(true)}>
      <div>
        <h2> Depoimentos de nossos clientes</h2>
        <div className='container-gallery'>
          <GalleryArrow func={controlMove} />
          <div className='gallery-wrapper'>
            <div className="gallery">
              {infoCard.map((e, index) => (
                // <img className='img' key={index}
                //   src={e.url} alt={e.alt} />
                <div className="container-card img" key={index}>
                  <Card name={e.name} url_image={e.url_image} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="grid-wrapper">
        <div className="grid">
          {infoCard.map((e, index) => (
            <div className="container-card" key={index}>
              <Card name={e.name} url_image={e.url_image} />
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </section >
  )
}