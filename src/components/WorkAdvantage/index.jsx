import './styles.css';
// import { Card } from '../Card'

export const WorkAdvantage = () => {
  return (
    <section id="advantages">
      <div>

        <h2>As melhores vantagens para o seu negócio</h2>
        <div id="advantages-description">
          <p>
            Com a <strong>Folha Facil</strong> você terá os melhores benefícios para o seu negócio com um investimento muito mais acessível.
          </p>
        </div>

        <div className="grid-one-wrapper">
          <div className="grid-one">
            <div className="grid-one-card-wrapper bg-color">
              <div className='grid-one-card'>
                <nav className='gradient'></nav>
                <h3>Redução de Custos</h3>
                <nav className="description">
                  <p>
                    A terceirização de departamento pessoal pode ajudar as empresas a reduzir custos com salários e encargos trabalhistas.
                  </p>
                </nav>
              </div>
            </div>
            <div className="grid-one-card-wrapper bg-color">
              <div className='grid-one-card'>
                <nav className='gradient'></nav>
                <h3>Otimização de processos</h3>
                <nav className="description">
                  <p>
                    Como mencionado, a terceirização de departamento pessoal permite que as empresas se concentrem em suas atividades principais.
                  </p>
                </nav>
              </div>
            </div>
            <div className="grid-one-card-wrapper bg-color">
              <div className='grid-one-card'>
                <nav className='gradient'></nav>
                <h3>Evita problemas trabalhistas</h3>
                <nav className="description">
                  <p>
                    A terceirização de departamento pessoal ajuda as empresas a evitar problemas trabalhistas, como multas e ações judiciais.
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}