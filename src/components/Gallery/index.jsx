// import { Card } from '../Card';
import "./styles.css";
import pessoa_img from './img/f.jpeg'
import paisagem from './img/paisagem.jpeg'
import { useEffect, useRef, useState } from 'react';
// import { useEffect } from 'react';


export const Gallery = () => {

  let [currentItem, setCurrentItem] = useState(2);
  let itemsRef = useRef([]);
  const items = document.querySelectorAll('.img');
  const maxItems = items.length


  useEffect(() => {
    itemsRef.current = document.querySelectorAll('.img');
    itemsRef.current[2].classList.add('current-img');
    setCurrentItem(2);
  }, []);



  // useEffect(() => {

  //   for (const image of itemsRef.current) {
  //     if (!(itemsRef.current[currentItem] == image)) image.classList.remove("current-img");
  //     else image.classList.add('current-img');
  //   }

  //   itemsRef.current[currentItem].scrollIntoView({
  //     inline: 'center',
  //     behavior: 'smooth',
  //     block: 'nearest',
  //   })
  //   itemsRef[currentItem].classList.add('current-img')

  // }, [currentItem]);

  useEffect(() => {
    if (itemsRef.current && itemsRef.current.length > 0) {
      itemsRef.current.forEach((image, index) => {
        if (index !== currentItem) {
          image.classList.remove("current-img");
        } else {
          image.classList.add("current-img");
          image.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
          });
        }
      });
    }
  }, [currentItem]);

  const controlMove = (name) => {
    setCurrentItem(prevItem => {
      console.log(prevItem)
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

  const infoPhotos = [
    {
      url: "https://source.unsplash.com/random/250x250/?beach",
      alt: "Imagem de praia",
    },
    {
      url: "https://source.unsplash.com/random/250x250/?animal",
      alt: "Imagem de animal",
    },
    {
      url: "https://source.unsplash.com/random/250x250/?street",
      alt: "Imagem de uma rua",
    },
    {
      url: "https://source.unsplash.com/random/250x250/?night",
      alt: "Imagem da noite",
    },
    {
      url: "https://source.unsplash.com/random/250x250/?nature",
      alt: "Imagem da natureza",
    },
    {
      url: "https://source.unsplash.com/random/250x250/?flower",
      alt: "Imagem de flores",
    },
    {
      url: "https://source.unsplash.com/random/250x250/?object",
      alt: "Imagem de um objeto",
    },

  ]

  return (
    <section>
      <div>
        <div className='container-gallery'>
          <div data-name='left' className='control item-1' onClick={(e) => controlMove(e.target.dataset.name)}> </div>
          <div data-name='right' className='control item-2' onClick={(e) => controlMove(e.target.dataset.name)}> </div>
          <div className='gallery-wrapper'>
            <div className="gallery">
              {infoPhotos.map((e, index) => (
                <img className='img' key={index}
                  src={e.url} alt={e.alt} />
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