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
                <div class="text-container">
                  <h1>
                    <span>I'm Eduardo</span>
                  </h1>
                  <p>
                    a creative Full-stack Developer from Berlin :)
                  </p>
                </div>
              </div>
              <div className="section">
                <div className="tech">
                  <div class="text-outer-container">
                    <h2>
                      <span>My Tech Stack</span>
                    </h2>
                    <ul>
                      {technologies.map((item) => (
                        <li>
                          <h4>{item}</h4>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="section">
                <section class="projects">
                  <div class="clip-container">bla</div>
                  <div class="projects-container">
                    <div class="text-outer-container">
                      <h2>
                        <span>Latest Projects</span>
                      </h2>
                      <ul class="projects-list">
                        <li>
                          <a href="https://github.com/fullstacksmart/kara-jobs">
                            <img
                              src={require('./assets/karamobile.gif')}
                            />
                          </a>
                          <h3>
                            <a href="https://github.com/fullstacksmart/kara-jobs">
                              Kara
                            </a>
                          </h3>
                        </li>
                        <li>
                          <a href="https://github.com/fullstacksmart/spaceway">
                            <img
                              src={require('./assets/spaceway-mobile.gif')}
                            />
                          </a>
                          <h3>
                            <a href="https://github.com/fullstacksmart/spaceway">
                              Spaceway
                            </a>
                          </h3>
                        </li>
                        <li>
                          <a href="https://github.com/fullstacksmart/fleetSpy">
                            <img
                              className="fleetspy"
                              src={require('./assets/fleetspu.png')}
                            />
                          </a>
                          <h3>
                            <a href="https://github.com/atsteinberg/fleetSpy">
                              FleetSpy
                            </a>
                          </h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <div className="social">
                  <h2>Let's get in touch!</h2>
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
