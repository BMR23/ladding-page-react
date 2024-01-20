import './styles.css';

import E1 from './img/E1.png';
import E2 from './img/E2.png';
import E3 from './img/E3.png';
import E4 from './img/E4.png';
import E5 from './img/E5.png';


export const Solutions = () => {

  return (
    <section id='solutions'>
      <div>
        <div className="solutions-container">
          <h2>Nossas soluções</h2>
          <p>
            Conheça cada um dos nosso serviços que podem otimizar seu tempo e proporcionar uma jornada completa.
          </p>

          <div className="card-solution-wrapper-all">
            <div className="card-solution">
              <img src={E1} alt="" />
              <div className='card-solution-text'>
                <h3>Admissão e demissão de funcionários</h3>
                <p>
                  O departamento pessoal é responsável por todo o processo de admissão e demissão de funcionários.
                </p>
                <nav className="container-button">
                  <button className="button">
                    <a href="https://wa.me/+5519974074929" target='_blank' rel="noreferrer">Quero conversar
                    </a></button>
                </nav>
              </div>
            </div>
            <div className="card-solution">
              <img src={E2} alt="" />
              <div className='card-solution-text'>
                <h3>Folha de pagamento</h3>
                <p>
                  O departamento pessoal é responsável pelo cálculo e pagamento da folha de pagamento dos funcionários, incluindo salários, encargos trabalhistas.
                </p>
                <nav className="container-button">
                  <button className="button">
                    <a href="https://wa.me/+5519974074929" target='_blank' rel="noreferrer">Quero conversar
                    </a></button>
                </nav>
              </div>
            </div>
            <div className="card-solution">
              <img src={E3} alt="" />
              <div className='card-solution-text'>
                <h3>Admissão e demissão de funcionários</h3>
                <p>
                  O departamento pessoal é responsável por todo o processo de admissão e demissão de funcionários.
                </p>
                <nav className="container-button">
                  <button className="button">
                    <a href="https://wa.me/+5519974074929" target='_blank' rel="noreferrer">Quero conversar
                    </a></button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="other-solutions">
        <div className='bg-color'>
          <nav>Outros serviços</nav>
        </div>
        <div className='other-solutions-description'>
          <ul>
            <li>Cálculos diversos;</li>
            <li>Enquadramento sindical;</li>
            <li>Controle de Férias;</li>
            <li>Acompanhamento de Convenção Coletiva;</li>
            <li>Orientações de benefícios;</li>
            <li>Parametrização da empresa no eSocial;</li>
            <li>Certidões Negativas;</li>
            <li>Cálculos de guias em atraso.</li>
          </ul>
        </div>
      </div>

      <div id='line-advantages' className="bg-color">
        <div className="items-line">
          <div className="item-line-wrapper">
            <div className="item-line">
              <img src={E4} alt="" />
              <div>
                <h3>Garantia e Segurança</h3>
                <p>
                  Assumimos toda a responsabilidade e execução dos processos e cálculos do DP.
                </p>
              </div>
            </div>
          </div>
          <div className="item-line-wrapper">
            <div className="item-line">
              <img src={E5} alt="" />
              <div>
                <h3>Confiabilidade</h3>
                <p>
                  A gestão de todas as rotinas é feita por um profissional especializado em DP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}