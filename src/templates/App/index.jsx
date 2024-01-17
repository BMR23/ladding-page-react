import './styles.css';
import { WorkMenu } from '../../components/WorkMenu';
import { WorkIntro } from '../../components/WorkIntro';
import { PosIntro } from '../../components/posIntro';
import { WorkAdvantage } from '../../components/WorkAdvantage';
import { WorkFooter } from '../../components/WorkFooter';
import { Gallery } from '../../components/Gallery';
import { MagicMotion } from 'react-magic-motion';
import { Solutions } from '../../components/Solutions';
// import { createContext, useContext } from 'react';
// import { Button, DatePicker, Card, Carousel } from 'antd';
// const { Meta } = Card

// useContext
// createContext
export const App = () => {


  return (
    <div>

      <MagicMotion
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
      >

        <WorkMenu />
      </MagicMotion>

      <main>


        {/* <Carousel /> */}
        <WorkIntro />
        <PosIntro />
        <WorkAdvantage />
        <Solutions />
        {/* <MagicMotion
          transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
        >
        </MagicMotion> */}
        <Gallery />
        {/* <section>
          <WorkMap />
        </section> */}
      </main>
      <WorkFooter />
    </div>

  )
}