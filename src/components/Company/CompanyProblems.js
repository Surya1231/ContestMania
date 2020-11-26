/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FullScreenError, LoadingFadeIn } from '../Common/Common';
import '../../css/companyProblems.css';

class CompanyProblems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Loading',
      questionHtml: '',
      solutionHtml: '',
      showSolution: false,
      tags: [],
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    const { match, problems } = this.props;
    const { id } = match.params;

    const problem = problems.filter((p) => p.id === id);
    if (problem.length) {
      this.setState({
        name: problem[0].name,
        questionHtml: problem[0].questionHtml,
        solutionHtml: problem[0].solutionHtml,
        tags: problem[0].tags,
        loading: false,
      });
    } else {
      this.setState({
        error: 'Question Not Found',
        loading: false,
      });
    }
  }

  toggleSolution = () => {
    const { showSolution } = this.state;
    this.setState({
      showSolution: !showSolution,
    });
  };

  render() {
    const { loading, error, showSolution } = this.state;
    const { name, questionHtml, tags, solutionHtml } = this.state;

    return (
      <div id="company-problems">
        <div className="container px-0">
          {loading && <LoadingFadeIn />}
          {error && <FullScreenError message={error} />}
          {!loading && !error && (
            <div className="bg-white shadow-sm py-4 px-3 content-box">
              <h4> {name} </h4>
              <hr className="mb-0" />
              <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: questionHtml }} />
              <br />

              <h5> Companies </h5>
              <hr className="my-1" />
              {tags.map((tag) => (
                <button key={tag} type="button" className="btn btn-sm btn-info mr-2 mt-1">
                  {tag}
                </button>
              ))}

              <h5 className="mt-4"> Solutions </h5>
              <hr className="my-2" />
              <li>
                <a href="#" onClick={this.toggleSolution}>
                  {showSolution ? 'Hide' : 'View'} solution
                </a>
                {showSolution && (
                  <div className="solution-box border px-3 py-3 bg-light overflow-x-auto">
                    <div dangerouslySetInnerHTML={{ __html: solutionHtml }} />
                  </div>
                )}
              </li>
              <li>
                <a href={`https://www.google.com/search?q=Leetcode+${name.replace(' ', '+')}+Solution`} target="_blank">
                  Google Solution
                </a>
              </li>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  problems: (state.company && state.company.problems) || [],
});

export default connect(mapStateToProps)(CompanyProblems);
