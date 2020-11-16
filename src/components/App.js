import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import About from './About/About';
import Codeforces from './Codeforces/Codeforces';
import { FullScreenError } from './Common/Common';
import Navbar from './Navbar/Navbar';
import News from './News/News';
import Problems from './Problems/Problems';
import Upcoming from './Upcoming/Upcoming';
import CodeChef from './CodeChef/CodeChef';

// import { buildGlobalSolutionData } from '../api/data/solutionsCreator';
// import { getCodeChefContestList } from '../api/ccApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ReactGA.initialize('G-JT0E9JWDHS');
    // buildGlobalSolutionData();
    // getCodeChefContestList();
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <div>
        <Navbar pathname={pathname} s />

        <Switch>
          <Route exact path="/" component={Codeforces} />
          <Route exact path="/problems" component={Problems} />
          <Route exact path="/codechef" component={CodeChef} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route component={FullScreenError} />
        </Switch>
      </div>
    );
  }
}

export default App;
