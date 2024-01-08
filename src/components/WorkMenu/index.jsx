import { useEffect, useState, } from 'react';
import './styles.css';

export const WorkMenu = () => {

  const [clickedMenu, setClickedMenu] = useState(false);
  const colorGreen = getComputedStyle(document.documentElement).getPropertyValue('--color-green')

  useEffect(() => {

    const menuOpacity = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const linksMenu = document.querySelectorAll('.link-menu');
      const menu = document.querySelector('#menu');

      if ((scrollPosition <= 10)) {
        linksMenu.forEach((link) => {
          link.classList.remove('opacity-8');
        })
        menu.classList.remove('opacity-9');

      }
      else {
        linksMenu.forEach((link) => {
          link.classList.add('opacity-8');
        })
        menu.classList.add('opacity-9');

      }
    }

    setTimeout(() => {
      window.addEventListener('scroll', () => menuOpacity(), true);
    }, 1);
  }, [])

  const scrollMy = (e) => {
    const link = e.target;
    const targetId = link.getAttribute('href'); // Obtém o ID do link
    const targetElement = document.querySelector(targetId); // Obtém o elemento alvo

    console.log(targetElement)

    if (targetElement) {
      e.preventDefault();
      const targetOffset = targetElement.offsetTop - 50;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth' // Scroll suave
      });
    }
  }

  return (
    <aside className="menu bg-color" id="menu">
      <nav>
        <h1>
          <a href="#intro" className='link-menu menu-title'>
            Folha Facil
          </a>
        </h1>

        <div className="links-wrapper" onClick={() => setClickedMenu(!clickedMenu)}>
          {!clickedMenu && (
            <nav className='menu-icon link-menu'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <line x1="3" y1="5" x2="41" y2="5" stroke={colorGreen} strokeWidth="3" />
                <line x1="3" y1="11" x2="41" y2="11" stroke={colorGreen} strokeWidth="3" />
                <line x1="3" y1="17" x2="41" y2="17" stroke={colorGreen} strokeWidth="3" />
              </svg>
            </nav>
          )}
          {clickedMenu && (
            <ul>
              <li><a href="#intro" className='link-menu' onClick={(e) => scrollMy(e)}>Home</a></li>
              <li><a href="#solutions" className='link-menu' onClick={(e) => scrollMy(e)}>Soluções</a></li>
              <li><a href="#questions" className='link-menu' onClick={(e) => scrollMy(e)}>Perguntas</a></li>
              <li><a href="#depositions" className='link-menu' onClick={(e) => scrollMy(e)}>Contato</a></li>
            </ul>
          )}
        </div>
      </nav>
    </aside>
  )
}