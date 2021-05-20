import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUpcomingContest } from '../../api/clListApi';
import { updateUpcomingContestAction } from '../../store/reducers/UpcomingReducer';
import { FullScreenError, LoadingFadeIn } from '../Common/Common';
import UpcomingTable from './UpcomingTable';

const CORS_ERROR = `We are unable to process your 
  request because of CORS error, Please click on 'Solve CORS'
   button and click then click 'Request temporary access to demo server'. 
   You can also try various extensions on chrome that solve CORS issue.
    We will soon find some permenant solution' `;

class Upcoming extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: {
        93: { name: 'AtCoder', show: true },
        1: { name: 'Codeforces', show: true },
        2: { name: 'Codechef', show: true },
        63: { name: 'Hackerrank', show: true },
        102: { name: 'Leetcode', show: true },
        73: { name: 'Hackerearth', show: true },
      },
      loading: false,
      error: '',
    };
  }

  componentDidMount() {
    this.updateContestList();
  }

  updateContestList = async () => {
    const { contestList } = this.props;
    if (!contestList.length) this.setState({ loading: true, error: '' });

    const { categories } = this.state;
    const categoryIdList = Object.keys(categories);
    const newContestList = await getUpcomingContest(categoryIdList);
    this.setState({ loading: false });

    if (!contestList.length && !newContestList.length) this.setState({ error: CORS_ERROR });
    if (newContestList.length) {
      const { updateUpcomingContestList } = this.props;
      updateUpcomingContestList(newContestList);
    }
  };

  handleChange = (event) => {
    const { name } = event.target;
    const { categories } = this.state;
    categories[name].show = !categories[name].show;
    this.setState({ categories });
  };

  render() {
    const { categories } = this.state;
    const { contestList } = this.props;
    const { loading, error } = this.state;
    return (
      <div id="upcoming">
        <div className="row mx-0">
          <div className="col-lg-2 col-md-3 py-3 px-0">
            <div className="sidebar px-3" style={{ fontSize: '1rem' }}>
              {Object.keys(categories).map((category) => (
                <div key={category} className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={categories[category].show}
                    name={category}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">{categories[category].name}</label>
                </div>
              ))}
              <hr />
              <a href="https://cors-anywhere.herokuapp.com/corsdemo" className="btn btn-danger btn-sm">
                Solve CORS
              </a>
            </div>
          </div>

          <div className="content-box border-left col-lg-10 col-md-9 px-1 px-md-2">
            {loading && <LoadingFadeIn />}
            {error && <FullScreenError message={error} />}
            {!loading && !error && <UpcomingTable contestList={contestList} filter={categories} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contestList: (state.upcoming && state.upcoming.contestList) || [],
});

const mapDispatchToProps = (disptach) => ({
  updateUpcomingContestList: (contestList) => disptach(updateUpcomingContestAction(contestList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
