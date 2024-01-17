// import { Card } from '../Card';
import "./styles.css";
import { useEffect, useRef, useState } from 'react';
import { Card } from '../Card';
import foto1 from './img/foto1.png';
import foto2 from './img/foto2.jpeg';
import foto3 from './img/foto3.jpeg';
// import { useEffect } from 'react';
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Gallery = () => {

  let [permission, setPermission] = useState(false);
  let [currentItem, setCurrentItem] = useState(0);
  let itemsRef = useRef([]);
  const items = document.querySelectorAll('.img');
  const maxItems = items.length


  useEffect(() => {
    itemsRef.current = document.querySelectorAll('.img');
    setCurrentItem(0);
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
    if (!permission) return

    if (itemsRef.current && itemsRef.current.length > 0) {
      itemsRef.current.forEach((img, index) => {
        if (index !== currentItem) {
          img.classList.remove("current-img");
        } else {
          img.classList.add("current-img");

          // const numberOfImgs = itemsRef.current.length - 1;
          img.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "center",
          });
          // if (numberOfImgs == index) {
          //   const pai = img.parentNode;

          //   setTimeout(() => {
          //     const left = pai.clientWidth;
          //     console.log(left)
          //     pai.scrollLeft = left
          //   }, 1100);
          // }
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

  // const infoPhotos = [
  //   {
  //     url: "https://source.unsplash.com/random/250x250/?beach",
  //     alt: "Imagem de praia",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/250x250/?animal",
  //     alt: "Imagem de animal",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/250x250/?street",
  //     alt: "Imagem de uma rua",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/250x250/?night",
  //     alt: "Imagem da noite",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/250x250/?nature",
  //     alt: "Imagem da natureza",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/250x250/?flower",
  //     alt: "Imagem de flores",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/250x250/?object",
  //     alt: "Imagem de um objeto",
  //   },

  // ]
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
  /* 
 
  return (
    <section id="depositions">
      <div>
 
        <h2>Depoimentos</h2>
 
        <div className="grid-wrapper">
          <div className="grid">
            {infoCard.map((e, index) => (
              <div className="container-card" key={index}>
                <Card name={e.name} url_image={e.url_image} />
              </div>
            ))}
          </div>
        </div>
 
      </div>
    </section>
  )
  */

  return (
    <section id="depositions" onMouseOver={() => setPermission(true)}>
      <div>
        <h2> Depoimentos de nossos clientes</h2>
        <div className='container-gallery'>
          <div className="content-controls">
            <div data-name='left' className='content-control' onClick={(e) => controlMove(e.target.dataset.name)}>
              <IoIosArrowBack data-name='left' className='control item-1' />
            </div>
            <div data-name='right' className='content-control' onClick={(e) => controlMove(e.target.dataset.name)}>
              <IoIosArrowForward data-name='right' className='control item-2' />
            </div>
          </div>
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