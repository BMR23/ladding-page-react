import './styles.css';
import { WorkMenu } from '../../components/WorkMenu';
import { WorkIntro } from '../../components/WorkIntro';
import { WorkObjective } from '../../components/WorkObjective';
import { WorkQuestions } from '../../components/WorkQuestions';
import { Card } from '../../components/Card';
import paisagem from './img/paisagem.jpeg';
import pessoaImg from './img/f.jpeg';
// import { createContext, useContext } from 'react';
// import { Button, DatePicker, Card, Carousel } from 'antd';
// const { Meta } = Card

// useContext
// createContext

export const App = () => {

  const infoCard = [
    {
      name: 'Hello',
      url_image: pessoaImg
    },
    {
      name: 'Hello',
      url_image: paisagem
    },
    {
      name: 'Hello',
      url_image: pessoaImg
    }
  ]



  return (
    <div>
      <WorkMenu />

      <main>

        <WorkIntro />
        <WorkObjective />
        <WorkQuestions />

        {/* <Gallery /> */}


        <section>
          <div className="grid-wrapper">
            <div className="grid">
              {infoCard.map((e, index) => (
                <div className="container-card" key={index}>
                  <Card name={e.name} url_image={e.url_image} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <img src={cores} alt="" /> */}
      </main>
    </div>
  )
}