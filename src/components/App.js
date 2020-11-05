/* eslint-disable  */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About/About';
import Codeforces from './Codeforces/Codeforces';
import { FullScreenError } from './Common/Common';
import Navbar from './Navbar/Navbar';
import News from './News/News';
import Problems from './Problems/Problems';
import Upcoming from './Upcoming/Upcoming';

// import { buildGlobalSolutionData } from '../api/data/solutionsCreator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // buildGlobalSolutionData();
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
