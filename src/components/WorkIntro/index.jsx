import imgHome from './img/P1J.png';
import './styles.css';
// import './media-queries/1020px.css'
import './media-queries/410px.css'


export const WorkIntro = () => {
  return (
    <section id="intro" className='bg-color'>
      <div className="content-1">
        <div className="intro-content-1">
          {/* <h1>Use a Folha Fácil a <br></br>seu favor, invista seu tempo no seu negócio!</h1> */}
          <h1>
            A <strong>solução</strong> perfeita para sua <strong>empresa.</strong>
          </h1>
          <p>
            Seja bem-vindo à Folha Facil, sua parceira
            confiável para terceirização de serviços contábeis.
            Descubra como podemos simplificar sua
            contabilidade e permitir que você se concentre no
            crescimento do seu negócio.
          </p>
          <button className='button'>
            <a href="https://wa.me/+5519974074929" target='_blank' rel="noreferrer">
              Solicite um orçamento
            </a>
          </button>
        </div>
        <img id="img-1" src={imgHome} alt=""></img>
      </div>
    </section>
  )
}