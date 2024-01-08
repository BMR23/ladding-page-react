import './styles.css';
// import { Card } from '../Card'

export const WorkSolutions = () => {
  return (
    <section id="solutions">
      <div>

        <h2>Vantagens da Terceirização</h2>
        <p>
          A terceirização de folha de pagamento oferece diversas vantagens para as empresas, como:
        </p>

        <div className="grid-one-wrapper">
          <div className="grid-one">
            <div className='grid-one-card bg-color'>
              <h3>Contabilidade Geral</h3>
              <p>
                Simplificamos a gestão
                financeira do seu negócio,
                cobrindo todas as bases
                da contabilidade geral
              </p>
            </div>
            <div className='grid-one-card bg-color'>
              <h3>Folha de Pagamento</h3>
              <p>
                Cuide dos seus
                colaboradores de forma
                eficiente e precisa.
              </p>
            </div>
            <div className='grid-one-card bg-color'>
              <h3>Impostos e Regularização</h3>
              <p>
                Navegue pelo complexo
                cenário tributário com
                confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}