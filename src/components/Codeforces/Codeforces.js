/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getCfContest } from '../../api/cfApi';
import { UpdateCfContestAction, UpdateCfFiltersAction } from '../../store/reducers/CfReducer';
import CfTable from './CfTable';
import CfUser from '../Common/CfUser';
import { FullScreenError, LoadingFadeIn, SearchInput } from '../Common/Common';

const applicableFilters = ['category', 'search', 'filter'];
const localFilters = ['category'];

class Codeforces extends Component {
  constructor(props) {
    super(props);

    const { filters } = props;
    this.state = {
      category: filters.category || 'All',
      search: '',
      filter: '',
      loading: false,
      error: '',
    };
  }

  componentDidMount() {
    this.updateContestList();
    const { location } = this.props;
    const params = queryString.parse(location.search);
    this.setState({ ...params }, () => this.updateFilters(this.state));
  }

  updateContestList = async () => {
    const { contestList } = this.props;
    if (contestList.length === 0) this.setState({ loading: true, error: '' });
    const newContestList = await getCfContest();
    this.setState({ loading: false });
    if (newContestList.length === 0 && contestList.length === 0) {
      this.setState({ error: 'Something went wrong with codeforces ! Please try again after sometime' });
    }
    if (newContestList.length) {
      const { updateCfContest } = this.props;
      updateCfContest(newContestList);
    }
  };

  updateFilters = (state) => {
    const filters = {};
    let query = '?';
    applicableFilters.forEach((key) => {
      if (localFilters.includes(key)) filters[key] = state[key];
      if (state[key]) {
        if (query.length > 1) query += '&';
        query += `${key}=${state[key]}`;
      }
    });
    if (query.length > 1) {
      const { history } = this.props;
      history.push(query);
    }
    const { updateCfFilters } = this.props;
    updateCfFilters(filters);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.updateFilters(this.state),
    );
  };

  render() {
    const { categories, contestList } = this.props;
    const { loading, error } = this.state;
    const { category, search, filter } = this.state;
    const searchCategory = (categories[category] && categories[category].search) || '';

    return (
      <div className="bg-light" id="codeforces">
        <div className="row mx-0">
          <div className="col-lg-2 col-md-3 mx-0 px-0 py-4 border-right">
            <div className="sidebar px-3">
              <SearchInput search={search} handleChange={this.handleChange} />
              <hr />
              <div className="form-group">
                <label>Category </label>
                <select
                  className="form-control form-control-sm"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  {Object.keys(categories).map((categoryOption) => (
                    <option key={categoryOption} value={categories[categoryOption].value}>
                      {categories[categoryOption].name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label> Filter</label>
                <select
                  className="form-control form-control-sm"
                  name="filter"
                  value={filter}
                  onChange={(this, this.handleChange)}
                >
                  <option value=""> All </option>
                  <option value="1"> Attempted </option>
                  <option value="0"> Not Attempted </option>
                </select>
              </div>
              <hr />
              <CfUser />
              <hr />
            </div>
          </div>

          <div className="content-box col-lg-10 col-md-9 mx-0 px-1 px-md-3 ">
            {loading && <LoadingFadeIn />}
            {error && <FullScreenError message={error} />}
            {!loading && !error && (
              <CfTable contestList={contestList} searchCategory={searchCategory} search={search} filter={filter} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: (state.codeforces && state.codeforces.categories) || {},
  contestList: (state.codeforces && state.codeforces.contestList) || [],
  filters: (state.codeforces && state.codeforces.filters) || {},
});

const mapDispatchToProps = (dispatch) => ({
  updateCfContest: (contestList) => dispatch(UpdateCfContestAction(contestList)),
  updateCfFilters: (filters) => dispatch(UpdateCfFiltersAction(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Codeforces);
