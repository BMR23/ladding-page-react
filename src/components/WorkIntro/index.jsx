import imgHome from './javascript.svg';
import './styles.css'


export const WorkIntro = () => {
  return (
    <section id="intro">
      <div className="content-1">
        <div className="intro-content-1">
          <h1>Use a Folha Fácil a <br></br>seu favor, invista seu tempo no seu negócio!</h1>
          <ul>
            <li>Quero falar com um contador</li>
            <li>Quero falar com um contador</li>
            <li>Quero falar com um contador</li>
          </ul>
          <button className='button'>Quero falar com um contador</button>
        </div>
        <img id="img-1" src={imgHome} alt=""></img>
      </div>
    </section>
  )
}