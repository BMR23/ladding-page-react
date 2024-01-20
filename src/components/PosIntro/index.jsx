import imgHome2 from './img/P2J.png';
import './styles.css';
// import './media-queries/1020px.css'
import './media-queries/410px.css'
import { scrollMy } from '../../utils/idLink';


export const PosIntro = () => {
  return (
    <section id="pos-intro">
      <div className="content-2">
        <div className="intro-content-2">
          {/* <h1>Use a Folha Fácil a <br></br>seu favor, invista seu tempo no seu negócio!</h1> */}
          <h2>
            Buscamos a excelência em todos os aspectos
          </h2>
          <p>
            Conte conosco para impulsionar o sucesso do seu negócio enquanto cuidamos dos números para você.
          </p>
          <p>
            Manter uma estrutura com profissionais treinados e habilitados tem um investimento alto e é por isso que a terceirização é a melhor opção para pequenas e médias empresas.
          </p>
          <ul>
            <li>Atendimento via WhatsApp, E-mail e Videoconferência;</li>
            <li>Planos de acordo com o seu perfil;</li>
            <li>Serviços Personalizados, ágeis e seguros;</li>
          </ul>
          <button className='button'>
            <a href="#solutions" onClick={(e) => scrollMy(e)}>
              Conhecer soluções
            </a>
          </button>
        </div>
        <img id="img-1" src={imgHome2} alt=""></img>
      </div>
    </section>
  )
}