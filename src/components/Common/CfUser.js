/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCfUserInfo } from '../../api/cfApi';
import {
  logoutCfUsersAction,
  updateCfUserDataAction,
  updateCfUserNamesAction,
  updateCfUserStatusAction,
} from '../../store/reducers/CfUsersReducer';
import { TooltipBox } from './Common';

const UserStatusBox = ({ user, status }) => {
  return (
    <div className="my-0 pl-2">
      {`${user} : `}
      {status === 'loading' && (
        <div className="spinner-border spinner-border-sm text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {status === 'failed' && (
        <span className="text-danger">
          <b>failed</b>
        </span>
      )}
      {status === 'success' && (
        <span className="text-success">
          <b>success</b>
        </span>
      )}
    </div>
  );
};

class CfUser extends Component {
  constructor(props) {
    super(props);

    const { usernames, userStatus } = this.props;
    this.state = {
      usernames: usernames || '',
      userStatus: userStatus || {},
      loggedIn: !!usernames,
    };
  }

  componentDidMount() {
    const { userData, usernames } = this.props;
    if (usernames && Object.keys(userData).length === 0) this.logIn();
  }

  fetchUserData = async (user, userData, userStatus) => {
    const { updateCfUserStatus } = this.props;
    return new Promise((resolve) => {
      getCfUserInfo(user)
        .then((data) => {
          data.forEach((submission) => {
            const { contestId, verdict, problem, id } = submission;
            const { index } = problem;
            if (!userData[contestId]) userData[contestId] = {};
            if (verdict === 'OK' && problem && index) {
              if (!userData[contestId][index]) userData[contestId][index] = [];
              const solutionLink = `https://codeforces.com/contest/${contestId}/submission/${id}`;
              const isPresent = userData[contestId][index].filter((item) => item.user === user);
              if (!isPresent.length) userData[contestId][index].push({ user, solutionLink });
            }
          });
          userStatus[user] = 'success';
          updateCfUserStatus(userStatus);
          this.setState({ userStatus });
          resolve();
        })
        .catch(() => {
          userStatus[user] = 'failed';
          updateCfUserStatus(userStatus);
          this.setState({ userStatus });
          resolve();
        });
    });
  };

  logIn = async () => {
    const { usernames } = this.state;
    const { updateCfUserNames, updateCfUserStatus, updateCfUserData } = this.props;
    const users = [...new Set(usernames.split(','))];
    const userStatus = {};
    users.forEach((user) => (userStatus[user] = 'loading'));
    this.setState({
      loggedIn: true,
      userStatus,
    });
    updateCfUserNames(usernames);
    updateCfUserStatus(userStatus);
    const userData = {};
    for (let i = 0; i < users.length; i += 1) await this.fetchUserData(users[i], userData, userStatus);
    updateCfUserData(userData);
  };

  logOut = () => {
    const { logoutCfUsers } = this.props;
    this.setState({
      usernames: '',
      userStatus: {},
      loggedIn: false,
    });
    logoutCfUsers();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { usernames, loggedIn, userStatus } = this.state;
    return (
      <div id="cf-user">
        <div className="form-group mb-2">
          <label>
            Cf Usernames
            <TooltipBox message='Separate Multiple usernames by ",". Example ashishgup,tourist' />
          </label>
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Your codeforces handle"
            name="usernames"
            required
            value={usernames}
            disabled={loggedIn}
            onChange={this.handleChange}
          />
        </div>
        {Object.keys(userStatus).map((user) => (
          <UserStatusBox key={user} user={user} status={userStatus[user]} />
        ))}
        {loggedIn ? (
          <button className="btn btn-danger mr-2 mt-3 btn-sm" type="button" onClick={this.logOut}>
            Logout
          </button>
        ) : (
          <button className="btn btn-success mr-2 mt-3 btn-sm" type="button" onClick={this.logIn}>
            Login
          </button>
        )}
        <button className="btn btn-info mt-3 btn-sm" type="button" onClick={this.logIn}>
          Refresh
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usernames: (state.cfUsers && state.cfUsers.usernames) || '',
  userStatus: (state.cfUsers && state.cfUsers.userStatus) || {},
  userData: (state.cfUsers && state.cfUsers.userData) || {},
});

const mapDispatchToProps = (dispatch) => ({
  updateCfUserNames: (usernames) => dispatch(updateCfUserNamesAction(usernames)),
  updateCfUserStatus: (userStatus) => dispatch(updateCfUserStatusAction(userStatus)),
  updateCfUserData: (userData) => dispatch(updateCfUserDataAction(userData)),
  logoutCfUsers: () => dispatch(logoutCfUsersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CfUser);
