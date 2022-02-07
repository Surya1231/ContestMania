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
      {difficulty === 'Easy' && <span className="alert-success">Easy</span>}
      {difficulty === 'Medium' && <span className="alert-warning">Medium</span>}
      {difficulty === 'Hard' && <span className="alert-danger">Hard</span>}
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

    const difficultyClass = (diff) => {
      let cls = '';
      if (diff === 'Easy') {
        cls = 'alert-success';
      } else if (diff === 'Medium') {
        cls = 'alert-warning';
      } else {
        cls = 'alert-danger';
      }
      return cls;
    };

    return (
      <div className="company-container">
        <div className="row mx-0 py-4">
          <div className="col-md-12 px-0 order-12">
            <table className="table table-bordered table-hover rounded" id="company-table">
              <thead>
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
                        <td className="font-weight-bold">
                          <Link to={`/company/${id}`} target="_blank">
                            {name}
                          </Link>
                        </td>
                        <td className="font-weight-bold text-muted">{acceptance}</td>
                        <td className={difficultyClass(problem.difficulty)}>
                          <DifficultyButton difficulty={problem.difficulty} />
                        </td>
                        {userSatus === '0' ? (
                          <td className="py-1">
                            <button
                              type="button"
                              className="btn btn-sm btn-info mr-2 mt-1"
                              onClick={() => this.updateProblem(id, '1')}
                            >
                              <i className="far fa-check-square mr-1" />
                              Done
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-warning mt-1 text-white"
                              onClick={() => this.updateProblem(id, '2')}
                            >
                              <i className="far fa-eye mr-1" />
                              Review
                            </button>
                          </td>
                        ) : (
                          <td
                            className={`cursor-pointer ${
                              userSatus === '1' ? 'bg-completed text-white' : 'bg-solved text-white'
                            }`}
                            onClick={() => this.updateProblem(id, '0')}
                          >
                            {userSatus === '1' ? (
                              <i className="fas fa-check-circle mr-2" />
                            ) : (
                              <i className="fas fa-check-double mr-2" />
                            )}
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
            <div className="alert alert-success py-2">
              <div className="row mx-0">
                <div className="col-md col-auto">
                  <p className="h5">Questions</p>
                  <span
                    className="badge badge-pill badge-primary px-2 py-1"
                    style={{ fontSize: '16px', letterSpacing: '1px' }}
                  >
                    {totalQuestions}
                  </span>
                </div>
                <div className="col-md col-auto">
                  <p className="h5">Solved</p>
                  <span
                    className="badge badge-pill badge-success px-2 py-1"
                    style={{ fontSize: '16px', letterSpacing: '1px' }}
                  >
                    {solvedQuestions}
                  </span>
                </div>
                <div className="col-md col-auto">
                  <p className="h5"> Mark Reviewed</p>
                  <span
                    className="badge badge-pill badge-info px-2 py-1"
                    style={{ fontSize: '16px', letterSpacing: '1px' }}
                  >
                    {reviewedQuestions}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 px-1 order-2 mb-2">
            <ul className="list-group list-group-flush" style={{ fontSize: '12px' }}>
              <li className="list-group-item list-group-item-primary">
                User Data will be saved in your
                <b className="ml-1">localStorage</b>
              </li>
              <li className="list-group-item list-group-item-primary">
                To undo any done or reviewed question click on
                <span className="ml-1 mr-1 badge badge-secondary">Completed</span>
                or
                <span className="ml-1 badge badge-secondary">Reviewed</span>
              </li>
            </ul>
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
