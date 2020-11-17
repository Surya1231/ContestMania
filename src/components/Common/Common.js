import React from 'react';

export const LoadingFadeIn = () => {
  return (
    <div className="text-center loader">
      <div>
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
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
