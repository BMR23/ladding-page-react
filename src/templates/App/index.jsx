import './styles.css';
import { WorkMenu } from '../../components/WorkMenu';
import { WorkIntro } from '../../components/WorkIntro';
import { WorkSolutions } from '../../components/WorkSolutions';
import { WorkQuestions } from '../../components/WorkQuestions';
import { WorkFooter } from '../../components/WorkFooter';
import { WorkDepositions } from '../../components/WorkDepositions';
import { MagicMotion } from 'react-magic-motion'
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



        <WorkIntro />
        <WorkSolutions />

        <MagicMotion
          transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
        >
          <WorkQuestions />
        </MagicMotion>
        <WorkDepositions />

      </main>
      <WorkFooter />
    </div>

  )
}