import "./styles.css";
import { useEffect, useRef, useState } from 'react';
import { Card } from '../Card';
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
            block: "nearest",
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
      name: 'Moraes Contabilidade Digital',
      stars: 10,
      text: 'Recomendo o Folha Facil Assessoria, orientação clara, objetiva, agilidade e muito profissionalismo.'
    },
    {
      name: 'Dínamo Cecon Ltda',
      stars: 10,
      text: 'Depois que terceirizamos o Departamento Pessoal temos mais tempo para focar nos clientes pois a rotina da folha de pagamento está sendo bem executada pelo Folha Facil Assessoria e não temos mais dor de cabeça com o envio do eSocial.'
    },
    {
      name: 'Exodo Contabilidade',
      stars: 10,
      text: ' A equipe do Folha Facil Assessoria esclarecem de forma clara as dúvidas trabalhistas dos nossos clientes e fazem toda a rotina do departamento pessoal.'
    },
    {
      name: 'Paulo SilMotor',
      stars: 9,
      text: 'Uma equipe prestativa e de confiança. Sempre dispostos a tirar nossas dúvidas e nos orientarem. Realizam um excelente trabalho.'
    },
    {
      name: 'Ana Lucia Minemercado Ltda',
      stars: 10,
      text: 'Uma equipe maravilhosa que temos muito a agradecer, competente, comprometida e receptiva, da qual somos clientes a mais de 10 anos. Muito obrigado a todos do Folha Facil Assessoria.'
    },
    {
      name: 'Skina Frango na Brasa',
      stars: 10,
      text: 'Só tenho a agradecer pela dedicação e comprometimento do Folha Facil Assessoria. São profissionais altamente qualificados que passam segurança e confiabilidade na execução dos serviços prestados.'
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
                  <Card name={e.name} url_image={e.url_image} text={e.text} stars={e.stars} />
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