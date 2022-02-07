/* eslint-disable react/jsx-curly-newline */
import React from 'react';

export const LoadingFadeIn = () => {
  return (
    <div className="text-center loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const defaultErrorMessage = 'Something went wrong. Please try again after sometime';

export const FullScreenError = ({ code = '', message = defaultErrorMessage }) => {
  return (
    <div className="alert alert-danger text-center mx-auto loader mt-3" style={{ maxWidth: '600px' }}>
      {code}
      <p>{message}</p>
    </div>
  );
};

export const TooltipBox = ({ title = 'i', message }) => {
  return (
    <span
      type="button"
      className="custom-toolkit text-white ml-2 px-2 rounded bg-secondary"
      data-toggle="tooltip"
      data-placement="top"
      title={message}
    >
      {title}
    </span>
  );
};

export const SearchInput = ({ handleChange, search }) => {
  return (
    <div className="form-group">
      <label htmlFor="SearchInput"> Search </label>
      <input
        id="SearchInput"
        className="form-control form-control-sm search-input"
        type="text"
        name="search"
        value={search}
        placeholder="eg: Contest Name"
        onChange={handleChange}
      />
      {search && (
        <button
          type="button"
          className="close text-danger search-close"
          aria-label="Close"
          onClick={() =>
            handleChange({
              target: {
                name: 'search',
                value: '',
              },
            })
          }
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};
