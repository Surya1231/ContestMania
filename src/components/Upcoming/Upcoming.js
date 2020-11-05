/* eslint-disable  */
import React, { Component } from 'react';
import { getUpcomingContest } from '../../api/clListApi';
import { FullScreenError, LoadingFadeIn } from '../Common/Common';
import UpcomingTable from './UpcomingTable';

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
      contestList: [],
    };
  }

  componentDidMount() {
    this.updateContestList();
  }

  updateContestList = async () => {
    this.setState({ loading: true, error: '' });
    const { categories } = this.state;
    const categoryIdList = Object.keys(categories);
    const contestList = await getUpcomingContest(categoryIdList);
    this.setState({ loading: false });
    if (!contestList.length) this.setState({ error: 'Something went wrong on our side.' });
    else {
      this.setState({ contestList });
    }
  };

  handleChange = (event) => {
    const { name } = event.target;
    const { categories } = this.state;
    categories[name].show = !categories[name].show;
    this.setState({ categories });
  };

  render() {
    const { categories, contestList } = this.state;
    const { loading, error } = this.state;
    return (
      <div id="upcoming">
        <div className="row mx-0">
          <div className="col-lg-2 col-md-3 py-3">
            <div className="sidebar px-2" style={{ fontSize: '1rem' }}>
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

export default Upcoming;
