import './styles.css';
import { Card } from '../Card';
import foto1 from './img/foto1.png';
import foto2 from './img/foto2.jpeg';
import foto3 from './img/foto3.jpeg';

export const WorkDepositions = () => {

  const infoCard = [
    {
      name: 'Hello',
      url_image: foto1
    },
    {
      name: 'Hello',
      url_image: foto2
    },
    {
      name: 'Hello',
      url_image: foto3
    },
  ]

  return (
    <section id="depositions">
      <div>

        <h2>Depoimentos de nossos clientes</h2>

        <div className="grid-wrapper">
          <div className="grid">
            {infoCard.map((e, index) => (
              <div className="container-card" key={index}>
                <Card name={e.name} url_image={e.url_image} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}