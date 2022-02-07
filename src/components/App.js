import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import ReactGA from 'react-ga';
import About from './About/About';
import Codeforces from './Codeforces/Codeforces';
import { FullScreenError } from './Common/Common';
import Navbar from './Navbar/Navbar';
import News from './News/News';
import Problems from './Problems/Problems';
import Upcoming from './Upcoming/Upcoming';
import CodeChef from './CodeChef/CodeChef';
import Company from './Company/Company';
import CompanyProblems from './Company/CompanyProblems';
import Compiler from './Compiler/Compiler';
import Home from './Home/Home';

// import { buildGlobalSolutionData } from '../api/data/solutionsCreator';;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ReactGA.initialize('G-JT0E9JWDHS');
    Axios.get('https://api.countapi.xyz/hit/contestmania.web.app/visits');
    // buildGlobalSolutionData();
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <div>
        <Navbar pathname={pathname} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/codeforces" component={Codeforces} />
          <Route exact path="/problems" component={Problems} />
          <Route exact path="/codechef" component={CodeChef} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/company/:id" component={CompanyProblems} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route exact path="/compiler" component={Compiler} />
          <Route render={() => <FullScreenError message="Following page couldn't be found" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
