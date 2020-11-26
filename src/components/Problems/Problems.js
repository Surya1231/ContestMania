import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getCfProblems } from '../../api/cfApi';
import { updateProblemsAction, updateProblemsFiltersAction } from '../../store/reducers/ProblemsReducer';
import CfUser from '../Common/CfUser';
import { FullScreenError, LoadingFadeIn, SearchInput } from '../Common/Common';
import ProblemsTable from './ProblemsTable';

const applicableFilters = ['category', 'search', 'index', 'minRating', 'maxRating'];
const localFilters = ['category'];

class Problems extends Component {
  constructor(props) {
    super(props);

    const { filters } = props;

    this.state = {
      loading: false,
      error: '',
      search: filters.search || '',
      category: filters.category || '',
      index: filters.index || '',
      minRating: filters.minRating || 0,
      maxRating: filters.maxRating || 10000,
    };
  }

  componentDidMount() {
    this.updateProblems();
    const { location } = this.props;
    const params = queryString.parse(location.search);
    this.setState({ ...params }, () => this.updateFilters(this.state));
  }

  updateProblems = async () => {
    const { problems } = this.props;
    if (!problems.length) {
      this.setState({ loading: true, error: '' });
      const newProblems = await getCfProblems();
      this.setState({ loading: false });
      if (!newProblems.length) this.setState({ error: 'Something went wrong please try again' });
      else {
        const { updateCfProblems } = this.props;
        updateCfProblems(newProblems);
      }
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
    const { updateProblemsFilters } = this.props;
    updateProblemsFilters(filters);
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
    const { loading, error } = this.state;
    const { search, category, index, minRating, maxRating } = this.state;
    const { categories, problems } = this.props;
    return (
      <div id="problems">
        <div className="row mx-0">
          <div className="col-lg-2 col-md-3 px-0 border-right">
            <div className="sidebar px-3 py-4">
              <SearchInput search={search} handleChange={this.handleChange} />
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
                  {categories.map((categoryOp) => (
                    <option key={categoryOp} value={categoryOp}>
                      {categoryOp}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label> Question Index </label>
                <select
                  className="form-control form-control-sm"
                  type="text"
                  name="index"
                  value={index}
                  onChange={this.handleChange}
                >
                  <option value="">All</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </select>
              </div>

              <label> Rating </label>
              <div className="form-row">
                <div className="form-group col-5">
                  <input
                    className="form-control form-control-sm"
                    type="number"
                    name="minRating"
                    value={minRating}
                    onChange={this.handleChange}
                  />
                </div>
                <label> - </label>
                <div className="form-group col-6">
                  <input
                    className="form-control form-control-sm"
                    type="number"
                    name="maxRating"
                    value={maxRating}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <hr />
              <CfUser />
              <hr />
            </div>
          </div>

          <div className="col-lg-10 col-md-9 content-box">
            {loading && <LoadingFadeIn />}
            {error && <FullScreenError message={error} />}
            {!loading && !error && (
              <ProblemsTable
                search={search}
                category={category}
                index={index}
                minRating={minRating}
                maxRating={maxRating}
                problems={problems}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  problems: (state.cfProblems && state.cfProblems.problems) || [],
  filters: (state.cfProblems && state.cfProblems.filters) || {},
  categories: (state.cfProblems && state.cfProblems.categories) || [],
});

const mapDispatchToProps = (dispatch) => ({
  updateCfProblems: (problems) => dispatch(updateProblemsAction(problems)),
  updateProblemsFilters: (filters) => dispatch(updateProblemsFiltersAction(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Problems);
