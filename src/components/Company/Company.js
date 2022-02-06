/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { clearCompanyUserDataAction, updateCompanyFiltersAction } from '../../store/reducers/CompanyReducer';
import { FullScreenError, LoadingFadeIn, SearchInput } from '../Common/Common';
import CompanyTable from './CompanyTable';

const applicableFilters = ['company', 'search', 'status', 'difficulty'];
const localFilters = ['company'];

class Company extends Component {
  constructor(props) {
    super(props);
    const { filters } = props;
    this.state = {
      loading: false,
      error: '',
      search: '',
      company: filters.company || '',
      status: '',
      difficulty: '',
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    this.setState({ ...params }, () => this.updateFilters(this.state));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.updateFilters(this.state),
    );
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
    const { updateCompanyFilters } = this.props;
    updateCompanyFilters(filters);
  };

  clearUserData = () => {
    if (window.confirm('Are you to clear all the data')) {
      const { clearCompanyUserData } = this.props;
      clearCompanyUserData();
    }
  };

  render() {
    const { loading, error } = this.state;
    const { search, company, status, difficulty } = this.state;
    const { categories } = this.props;

    return (
      <div id="company">
        <div className="row mx-0">
          <div className="col-lg-2 col-md-3 px-0 border-right">
            <div className="sidebar px-3 py-4">
              <SearchInput search={search} handleChange={this.handleChange} />
              <div>
                <div className="form-group">
                  <label> Company </label>
                  <select
                    className="form-control form-control-sm"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                  >
                    <option value=""> All </option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label> Status </label>
                  <select
                    className="form-control form-control-sm"
                    name="status"
                    value={status}
                    onChange={this.handleChange}
                  >
                    <option value=""> All </option>
                    <option value="1"> Solved </option>
                    <option value="2"> Reviewed </option>
                    <option value="0"> Unsolved </option>
                  </select>
                </div>
                <div className="form-group">
                  <label> Difficulty </label>
                  <select
                    className="form-control form-control-sm"
                    name="difficulty"
                    value={difficulty}
                    onChange={this.handleChange}
                  >
                    <option value=""> All </option>
                    <option> Easy </option>
                    <option> Medium </option>
                    <option> Hard </option>
                  </select>
                </div>
                <button type="button" className="btn btn-sm btn-danger" onClick={this.clearUserData}>
                  Clear User Data
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-md-9 content-box">
            {loading && <LoadingFadeIn />}
            {error && <FullScreenError message={error} />}
            {!loading && !error && (
              <CompanyTable search={search} company={company} status={status} difficulty={difficulty} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: (state.company && state.company.categories) || [],
  filters: (state.company && state.company.filters) || {},
});

const mapDispatchToProps = (dispatch) => ({
  updateCompanyFilters: (filters) => dispatch(updateCompanyFiltersAction(filters)),
  clearCompanyUserData: () => dispatch(clearCompanyUserDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
