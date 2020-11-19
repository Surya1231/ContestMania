/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCompanyUserDataAction } from '../../store/reducers/CompanyReducer';

function DifficultyButton({ difficulty }) {
  return (
    <>
      {difficulty === 'Easy' && <span className="text-primary">Easy</span>}
      {difficulty === 'Medium' && <span className="text-warning">Medium</span>}
      {difficulty === 'Hard' && <span className="text-danger">Hard</span>}
    </>
  );
}

class CompanyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
    };
  }

  toggleChange = () => {
    const { change } = this.state;
    this.setState({
      change: !change,
    });
  };

  updateProblem = (id, val) => {
    const { userData, updateUserData } = this.props;
    userData[id] = val;
    updateUserData(userData);
    this.toggleChange();
  };

  render() {
    const { problems, userData } = this.props;
    const { search, status, company, difficulty } = this.props;

    let solvedQuestions = 0;
    let totalQuestions = 0;
    let reviewedQuestions = 0;

    return (
      <div className="company-container">
        <div className="row mx-0 py-4">
          <div className="col-md-12 px-0 order-12">
            <table className="table table-bordered bg-white shadow-sm rounded" id="company-table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Acceptance</th>
                  <th scope="col">Difficulty</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {problems.map((problem) => {
                  const { tags, name, id, acceptance } = problem;
                  const userSatus = userData[id] || '0';

                  if (
                    (!company || tags.indexOf(company) !== -1) &&
                    (!status || userSatus === status) &&
                    name.indexOf(search) !== -1 &&
                    (!difficulty || difficulty === problem.difficulty)
                  ) {
                    totalQuestions += 1;
                    if (userSatus === '1') solvedQuestions += 1;
                    if (userSatus === '2') reviewedQuestions += 1;

                    return (
                      <tr key={id}>
                        <td>{totalQuestions}</td>
                        <td>
                          <Link to={`/company/${id}`} target="_blank">
                            {name}
                          </Link>
                        </td>
                        <td>{acceptance}</td>
                        <td>
                          <DifficultyButton difficulty={problem.difficulty} />
                        </td>
                        {userSatus === '0' ? (
                          <td className="py-1">
                            <button
                              type="button"
                              className="btn btn-sm btn-info mr-1 mt-1"
                              onClick={() => this.updateProblem(id, '1')}
                            >
                              Done
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-warning mt-1 text-white"
                              onClick={() => this.updateProblem(id, '2')}
                            >
                              Review
                            </button>
                          </td>
                        ) : (
                          <td
                            className={`cursor-pointer ${userSatus === '1' ? 'bg-solved' : 'bg-reviewed'}`}
                            onClick={() => this.updateProblem(id, '0')}
                          >
                            <span className="text-white">{userSatus === '1' ? 'Completed' : 'Reviewed'}</span>
                          </td>
                        )}
                      </tr>
                    );
                  }
                  return <React.Fragment key={id} />;
                })}
              </tbody>
            </table>
          </div>

          <div className="col-md-12 px-1 order-1">
            <div className="alert alert-primary py-1">
              <div className="row mx-0">
                <div className="col-md col-auto">
                  <b> Questions : </b>
                  <span className="text-primary">{totalQuestions}</span>
                </div>
                <div className="col-md col-auto">
                  <b> Solved : </b>
                  <span className="text-primary">{solvedQuestions}</span>
                </div>
                <div className="col-md col-auto">
                  <b> Mark Reviewed : </b>
                  <span className="text-primary">{reviewedQuestions}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 px-1 order-2">
            <div className="alert alert-warning py-1" style={{ fontSize: '0.9rem' }}>
              <li>User Data will be saved in your localStorage.</li>
              <li>To undo any done or reviewd question click on 'Completed' or 'Reviewed'.</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  problems: (state.company && state.company.problems) || [],
  userData: (state.company && state.company.userData) || {},
});

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (userData) => dispatch(updateCompanyUserDataAction(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyTable);
