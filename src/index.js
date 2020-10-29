import React from 'react';
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import './styles.css';

const technologies = [
  { name: 'Javascript', path: require('./assets/javascript.png') },
  { name: 'Typescript', path: require('./assets/typescript.png') },
  { name: 'React', path: require('./assets/react.png') },
  { name: 'React Native', path: require('./assets/reactnative.png') },
  { name: 'Angular', path: require('./assets/angular.png') },
  { name: 'Node.js', path: require('./assets/nodejs.png') },
  { name: 'Express', path: require('./assets/express.png') },
  { name: 'Koa', path: require('./assets/koa.png') },
  { name: 'MongoDB', path: require('./assets/mongodb.png') },
  { name: 'Mongoose', path: require('./assets/mongoose.png') },
  { name: 'SQL', path: require('./assets/sql.png') },
  { name: 'GraphQL', path: require('./assets/graphql.png') },
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
              </div>
              <div className="section">
                <div className="tech">
                  <ul>
                    {technologies.map((item) => (
                      <li>
                        <h4>{item.name}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="section">
                <div className="slide">
                  <div class="project">
                    <a href="https://github.com/fullstacksmart/kara-jobs">
                      kara
                    </a>
                    <a href="https://github.com/fullstacksmart/kara-jobs">
                      <img
                        src={require('./assets/Kara-mobile.gif')}
                      />
                    </a>
                    <h3></h3>
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
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
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
