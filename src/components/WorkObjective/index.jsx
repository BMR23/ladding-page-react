import './styles.css';
// import { Card } from '../Card'

export const WorkObjective = () => {
  return (
    <section id="objectives">
      <div>

        <h2>Nosso Objetivo</h2>

        <div className="grid-one">
          <div>
            <nav>
              <h3>First</h3>
              <p>This button would add a box to the row of kwy content boxes below the intro text. This should put the box
                there regardless of where the user is currently writing.</p>
            </nav>
          </div>
          <div>
            <nav>
              <h3>Another site</h3>
              <p>I&apos;d suggest having a poput that asks where in the row to insert the box (at the beginning or end), what
                text to put in the box, and where the box shoulf link to. The entire box should serve as a link to the
                destination page.</p>
            </nav>
          </div>
          <div>
            <nav>
              <h3>Third one</h3>
              <p>You can also include a type attribute containing the MIME typw of the resource, so a browser can quickly
                see what resources are on offer, and ignore ones that it doesn&apos;t support.</p>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}