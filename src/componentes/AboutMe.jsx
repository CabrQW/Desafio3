import "./AboutMe.css"


function AboutMe() {
    return (
        <div className="about poppins-semibold" id="about">
        <h1 className="about--title">Sobre mim</h1>
        <div className="about--timeLine">
          <div className="about--timeLineFirstCard">
            <div className="about--year">
              <p className="about--yearText">2018</p>
            </div>
            <div className="about--firstLine">
              <div className="about--lineCircle" />
            </div>
            <div className="about--timeLineDescription">
              <p className="about--timeLineDescriptionText">
               Foi quando eu terminei o ensino medio e comecei a foca estudar para passa no vestibular
              </p>
            </div>
          </div>
  
          <div className="about--timeLineCard">
            <div className="about--year">
              <p className="about--yearText">2019</p>
            </div>
            <div className="about--line">
              <div className="about--lineCircle" />
            </div>
            <div className="about--timeLineDescription">
              <p className="about--timeLineDescriptionText">
                Estudava para passa em Ciência Da Computação e no mesmo tempo procurava um emprego.
              </p>
            </div>
          </div>
          <div className="about--timeLineCard">
            <div className="about--year">
              <p className="about--yearText">2021</p>
            </div>
            <div className="about--line">
              <div className="about--lineCircle" />
            </div>
            <div className="about--timeLineDescription">
              <p className="about--timeLineDescriptionText">
                Em 2021 foi onde comecei a ter interesse na programação, ficava vendo como era mais nunca foi atrás
              </p>
            </div>
          </div>
          <div className="about--timeLineCard">
            <div className="about--year">
              <p className="about--yearText">2023</p>
            </div>
            <div className="about--line">
              <div className="about--lineCircle" />
            </div>
            <div className="about--timeLineDescription">
              <p className="about--timeLineDescriptionText">
                Em 2023 foi a onde comecei a ver aulas no YouTube, e também procura
                um cursos de programação e me aprofundei em Inglês.
              </p>
            </div>
          </div>
          <div className="about--timeLineLastCard">
            <div className="about--year">
              <p className="about--yearText">2024</p>
            </div>
            <div className="about--lastLine">
              <div className="about--lineCircle" />
            </div>
            <div className="about--timeLineDescription">
              <p className="about--timeLineDescriptionText">
                É o ano do meu sucesso, e entrarei na área de desenvolvimento o mais breve!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutMe;