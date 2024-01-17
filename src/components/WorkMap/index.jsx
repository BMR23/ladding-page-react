import { useRef, useEffect } from 'react';
import './style.css';

export const WorkMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const mapElement = mapRef.current;

    const loadMapCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = document.createElement('iframe');
          iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.8649227578576!2d-46.39309302363552!3d-23.429246156753752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce62825a2595f5%3A0x25e3f6199ff5107f!2sRulli%20Standard%20Ind%C3%BAstria%20e%20Com%C3%A9rcio%20de%20M%C3%A1quinas!5e0!3m2!1spt-BR!2sbr!4v1704760874882!5m2!1spt-BR!2sbr');
          iframe.setAttribute('width', '100vw');
          iframe.setAttribute('height', '100vh');
          mapElement.appendChild(iframe);
          observer.unobserve(mapElement);
        }
      });
    };

    const observer = new IntersectionObserver(loadMapCallback, options);
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => {
      if (mapElement) {
        observer.unobserve(mapElement);
      }
    };
  }, []);

  return (
    <div ref={mapRef}></div>
    //<iframe src=""
    //width="100vw" height="100vh" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='maps'>
    //</iframe>
  );
};