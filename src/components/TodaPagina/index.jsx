import './styles.css';
import imgHome from './assets/img/javascript.svg';

export const TodaPagina = () => {
  return (
    <div>

      <main>
        <section className="bg-color" id="intro">
          <div className="content-1">
            <div className="bg-color-content-1">
              <h1>January bring us Firefox 85</h1>
              <p>To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing
                you support for the :focus-visible pseudo-className in CSS and the complete removal of Flash support from
                Firefox</p>
            </div>
            <img id="imagem-1" src={imgHome} alt=""></img>
          </div>
        </section>

        <section className="bg-color-white" id="white-1">
          <div className="content-1">
            <h2 className="bg-white-title">Top 3 Jobs</h2>
            <p>The release of Apple Silicon-based Macs at the end of last year generate a flurry of news coverage and some
              surprises at the machine&apos;s perfomance. This post details some background information on the experience of
              porting Firefox to run natively on these CPUs.</p>
            <p>We&apos;ll start with some background on the Mac transition and give an overview of Firefox internals that needed
              to know about the new architecture, before moving on to the concept of Universal Binaries.</p>
            <p>We&apos;ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and
              discuss various updater problems we had to deal with. We&apos;ll concluide with the release and an overview of
              various other improvements that are in the pipeline</p>
          </div>
        </section>

        <section className="bg-color-white" id="gallery">
          <div className="content-2">
            <h2>Gallery</h2>
            <p>Here are some of my pics.</p>

            <div className="grid-two">
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/600x600?r=1" alt="random image from unsplash"></img>
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/600x600?r=2" alt="random image from unsplash"></img>
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/600x600?r=3" alt="random image from unsplash"></img>
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/600x600?r=4" alt="random image from unsplash"></img>
              </div>
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/600x600?r=5" alt="random image from unsplash"></img>
              </div >
              <div className="gallery-img">
                <img src="http://source.unsplash.com/random/600x600?r=6" alt="random image from unsplash" ></img>
              </div >
            </div >
          </div >
        </section >

        <section className="bg-color" id="work">
          <div className="content-3">
            <h1>Recent Jobs</h1>
            <div className="grid-one">
              <nav>
                <h2>A good one</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt autem sapiente. Nostrum ipsum
                  quos aut architecto similique provident inventore dolor et id cumque. Reprehenderit fuga inventore tempore
                  consectetur fugit?</p>
              </nav>
              <nav>
                <h2>Great job</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit necessitatibus eaque sunt
                  natus cupiditate magni, illo, vero commodi quae magnam architecto alias, amet laboriosam. Quaerat
                  aspernatur optio hic dignissimos!</p>
              </nav>
              <nav>
                <h2>The best</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis in nostrum ullam! Iure fuga consequatur
                  nostrum placeat ducimus ipsa, ab quae nam nobis sit ex corporis voluptates. Perspiciatis, porro
                  praesentium.</p>
              </nav>
            </div>
          </div>
        </section>
        <section id="pricing" className="bg-color-white">
          <div className="content-3">
            <h2>Pricing</h2>
            <p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some
              surprises at the machine&apos;s performance. This post details some background information on the experience of
              porting Firefox to run natively on these CPUs.</p>
            <p>We&apos;ll start with some background on the Mac transition and give an overview of Firefox internals that needed
              to
              know about the new architecture, before moving on to the concept of Universal Binaries.</p>
            <div className="responsive-table">
              <table onScroll="desaparecer()">
                <caption><em>Pricing table</em></caption>

                <thead>
                  <tr>
                    <th>Title 1</th>
                    <th>Title 2</th>
                    <th>Title 3</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>
                    <td>Content 3</td>
                  </tr>
                  <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>
                    <td>Content 3</td>
                  </tr>
                  <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>
                    <td>Content 3</td>
                  </tr>
                  <tr>
                    <td rowSpan="0" id="td-duplo">SPAN DOWN</td>
                    <td>Content 2</td>
                    <td>Content 3</td>
                  </tr>
                  <tr>
                    <td>Content 2</td>
                    <td>Content 3</td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <td colSpan="3">Footer 1</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-color">
          <div className="content-4">
            <div className="content-1">
              <div className="bg-color-content-1">
                <h1>January bring us Firefox 85</h1>
                <p>To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing
                  you support for the :focus-visible pseudo-className in CSS and the complete removal of Flash support from
                  Firefox</p>
              </div>
              <img id="imagem-2" src="assets/img/javascript.svg" alt=""></img>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Feito por <a href="https://github.com/BMR23">Breno Melo</a>.</p>
      </footer>
    </div>
  )
}