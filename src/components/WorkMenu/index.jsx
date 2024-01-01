import { useEffect } from 'react';
import './styles.css';

export const WorkMenu = () => {

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

  return (
    <aside className="menu" id="menu">
      <nav>
        <h1><a href="#intro" className='link-menu'>Folha Facil</a></h1>
        <ul>
          <li><a href="#intro" className='link-menu'>Home</a></li>
          <li><a href="#objectives" className='link-menu'>Soluções</a></li>
          <li><a href="#questions" className='link-menu'>Perguntas</a></li>
          <li><a href="#questions" className='link-menu'>Contato</a></li>
        </ul>
      </nav>
    </aside>
  )
}