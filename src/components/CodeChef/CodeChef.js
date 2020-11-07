import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { getCodeChefContestList } from '../../api/ccApi';
import { updateCodeChefContestListAction, updateCodeChefFiltersAction } from '../../store/reducers/CCReducer';
import { FullScreenError, LoadingFadeIn } from '../Common/Common';
import CCTable from './CCTable';

const applicableFilters = ['category', 'search'];
const localFilters = ['category'];

class CodeChef extends Component {
  constructor(props) {
    super(props);

    const { ccFilters } = props;
    this.state = {
      loading: false,
      error: '',
      category: ccFilters.category || '',
      search: '',
    };
  }

  componentDidMount() {
    this.updateCodeChefContest();
    const { location } = this.props;
    const params = queryString.parse(location.search);
    this.setState({ ...params }, () => this.updateFilters(this.state));
  }

  updateCodeChefContest = async () => {
    const { ccContestList } = this.props;
    if (!ccContestList.length) this.setState({ loading: true, error: '' });
    const newCodeChefContestList = await getCodeChefContestList();
    this.setState({ loading: false });
    if (!ccContestList.length && !newCodeChefContestList.length)
      this.setState({ error: 'Something went wrong please try again' });
    else {
      const { updateCodeChefContestList } = this.props;
      updateCodeChefContestList(newCodeChefContestList);
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
    const { history } = this.props;
    history.push(query);
    const { updateCodeChefFilters } = this.props;
    updateCodeChefFilters(filters);
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
    const { ccCategories, ccContestList } = this.props;
    const { category, search, loading, error } = this.state;
    const categorySearch = (ccCategories[category] && ccCategories[category].search) || '';

    return (
      <div id="codechef">
        <div className="row mx-0">
          <div className="col-lg-2 col-md-3 px-0 border-right">
            <div className="sidebar px-3 py-4">
              <div className="form-group">
                <label> Search </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="search"
                  value={search}
                  placeholder="Search anything here"
                  onChange={this.handleChange}
                />
              </div>
              <hr />
              <div className="form-group">
                <label> Categories </label>
                <select
                  className="form-control form-control-sm"
                  type="text"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  <option value="" key="0">
                    All
                  </option>
                  {Object.keys(ccCategories).map((categoryOp) => (
                    <option key={categoryOp} value={categoryOp}>
                      {ccCategories[categoryOp].name}
                    </option>
                  ))}
                </select>
              </div>
              <hr />
            </div>
          </div>

          <div className="col-lg-10 col-md-9 content-box">
            {loading && <LoadingFadeIn />}
            {error && <FullScreenError message={error} />}
            {!loading && !error && <CCTable search={search} category={categorySearch} contestList={ccContestList} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ccContestList: (state.codechef && state.codechef.ccContestList) || [],
  ccFilters: (state.codechef && state.codechef.ccFilters) || {},
  ccCategories: (state.codechef && state.codechef.ccCategories) || {},
});

const mapDispatchToProps = (dispatch) => ({
  updateCodeChefContestList: (ccContestList) => dispatch(updateCodeChefContestListAction(ccContestList)),
  updateCodeChefFilters: (ccFilters) => dispatch(updateCodeChefFiltersAction(ccFilters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CodeChef);
