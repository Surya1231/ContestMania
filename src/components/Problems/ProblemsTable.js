/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { globalSolutionUsers } from '../../api/data/solutionsCreator';

const QuestionLimit = 1000;

const ProblemsTable = (props) => {
  const { userData, globalSolutions } = props;
  const { search, category, index, minRating, maxRating, problems } = props;
  let totalQuestions = 0;
  let solvedQuestions = 0;
  return (
    <div id="problems-table">
      <div className="row mx-0 py-4">
        <div className="col-md-12 px-0 order-12">
          <div className="row mx-0 problems-inner-table">
            {problems.map((problem) => {
              const { contestId, name, rating, userSolved, tags } = problem;
              const problemIndex = problem.index;
              const solved = (userData[contestId] && userData[contestId][problemIndex]) || [];
              const globalSol = (globalSolutions[contestId] && globalSolutions[contestId][problemIndex]) || [];
              const solutions = [...solved, ...globalSol];
              const searchQuery = [name, ...tags].join(',') + JSON.stringify(solutions);
              if (
                totalQuestions < QuestionLimit &&
                (!category || tags.includes(category)) &&
                searchQuery.indexOf(search) !== -1 &&
                problemIndex.indexOf(index) !== -1 &&
                Number(rating) >= Number(minRating) &&
                Number(rating) <= Number(maxRating)
              ) {
                const problemLink = `https://codeforces.com/contest/${contestId}/problem/${problemIndex}`;

                totalQuestions += 1;
                if (solved.length) solvedQuestions += 1;

                return (
                  <div key={contestId + problemIndex} className="problem-outer-box col-md-4 px-2 py-2">
                    <ul className={`list-group shadow-sm ${solved.length ? 'problem-solved' : ''}`}>
                      <li className="list-group-item active py-1">
                        <b>{`${totalQuestions} ${problemIndex} `}</b>
                        {name}
                      </li>
                      <li className="list-group-item py-1">
                        <b>Question : </b>
                        <a href={problemLink} rel="noopener noreferrer" target="_blank">
                          {name}
                        </a>
                      </li>
                      <li className="list-group-item py-1">
                        <b>Solutions : </b>
                        {solutions.length
                          ? solutions.map((solution, i) => (
                              <React.Fragment key={i}>
                                <a rel="noopener noreferrer" target="_blank" href={solution.solutionLink}>
                                  {`${solution.user}`}
                                </a>
                                {i + 1 !== solutions.length && ' , '}
                              </React.Fragment>
                            ))
                          : 'No Solution Available'}
                      </li>
                      <li className="list-group-item py-1">
                        <b>Rating : </b>
                        {`${rating === 10000 ? 'Not Rated' : rating} , ${problemIndex}`}
                      </li>
                      <li className="list-group-item py-1">
                        <b>Users Solved : </b>
                        <span className={Number(userSolved) > 5000 ? 'text-success' : 'text-danger'}>{userSolved}</span>
                      </li>
                      <li className="list-group-item py-1">
                        <b>Tags : </b>
                        {tags.join(', ')}
                      </li>
                    </ul>
                  </div>
                );
              }
              return <React.Fragment key={contestId + problemIndex} />;
            })}
          </div>
        </div>

        <div className="col-md-12 px-1 order-1">
          <div className="alert alert-primary py-1">
            <div className="row mx-0">
              <div className="col-md col-auto">
                <b> Questions : </b>
                <span className="text-success">{solvedQuestions}</span>/{totalQuestions}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 px-1 order-2">
          <div className="alert alert-warning py-1" style={{ fontSize: '0.9rem' }}>
            <li>Problems are sorted ratings wise. </li>
            <li>Solutions references are taken from : {globalSolutionUsers.join(', ')} .</li>
            <li>
              Maximum of {QuestionLimit} problems are shown at a time for smooth functioning. Adjust filters to get more
              questions.
            </li>
            <li>To get all non rated question apply rating filter 10000-10000.</li>
            <li>For searching problems with multiple tags, separate them by ',' like "dp,greedy".</li>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: (state.cfUsers && state.cfUsers.userData) || {},
  globalSolutions: (state.cfProblems && state.cfProblems.globalSolutions) || {},
});

export default connect(mapStateToProps)(ProblemsTable);
