import React from 'react';
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import './styles.css';

const technologies = [
  'Javascript',
  'Typescript',
  'React',
  'React Native',
  'Angular',
  'Node.js',
  'Express',
  'Koa',
  'MongoDB',
  'Mongoose',
  'SQL',
  'GraphQL',
];

const karaUrl = 'https://github.com/fullstacksmart/kara-jobs';
const fleetspyUrl = 'https://github.com/fullstacksmart/kara-jobs';
const spacewayUrl = 'https://github.com/pintoedo/spaceway';

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log('After load: ' + destination.index);
  }

  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={['black', 'black', 'black', 'black']}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3>i'm eduardo</h3>
                <h4 className="line typing">
                  A creative Full Stack Developer :)
                </h4>
              </div>
              <div className="section">
                <div className="tech">
                  <ul>
                    {technologies.map((item) => (
                      <li>
                        <h4>{item}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="section">
                <div className="slide">
                  <div class="project">
                    <a href="https://github.com/fullstacksmart/kara-jobs">
                      <img
                        src={require('./assets/Kara-mobile.gif')}
                      />
                    </a>
                    <div className="project-info">
                      <h1>Kara</h1>
                      <li className="centerh4">
                        Kara is a job platform that connects
                        international health care professionals with
                        German employers.{' '}
                      </li>
                      <li className="centerh4">
                        Tech-stack: React, Redux, Typescript,
                        Firebase, Koa, PostgreSQL, lots of love 💟 .
                      </li>
                      <button className="repo-button">
                        Github Repo
                      </button>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="project">
                    <h4 className="centerh4">FleetSPY</h4>
                  </div>
                </div>
                <div className="slide">
                  <div className="project">
                    <h4 className="centerh4">Spaceway</h4>
                  </div>
                </div>
              </div>
              <div className="section">
                <h3>Get in touch</h3>
                <div className="social">
                  <a href="https://linkedin.com/in/pintocodes">
                    <img
                      className="social-icon"
                      src={require('./assets/linkedin.png')}
                    />
                  </a>
                  <a href="https://github.com/pintoedo">
                    <img
                      className="social-icon"
                      src={require('./assets/github.png')}
                    />
                  </a>
                  <a href="mailto:edu@pinto.codes">
                    <img
                      className="social-icon"
                      src={require('./assets/email.png')}
                    />
                  </a>
                </div>
                {/* <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button> */}
              </div>
            </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(
  <FullpageWrapper />,
  document.getElementById('react-root'),
);

export default FullpageWrapper;
