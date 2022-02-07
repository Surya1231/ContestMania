/* eslint-disable react/destructuring-assignment */
import Axios from 'axios';
import React, { Component } from 'react';

const URL = 'https://api.countapi.xyz/get/contestmania.web.app/visits';

class Visit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visits: 0,
    };
  }

  componentDidMount() {
    Axios.get(URL)
      .then((res) => {
        const scale = 100;
        const { value } = res.data;
        const time = (2000 * scale) / value;
        let i = 1;
        const timer = setInterval(() => {
          i += 1;
          this.setState({ visits: `${(i * scale) / 1000}k` });
          if (i * scale >= value) clearInterval(timer);
        }, time);
      })
      .catch(() => {
        this.setState({ visits: `0` });
      });
  }

  render() {
    const { visits } = this.state;
    return (
      <div className="visits inline-block btn-dark">
        <p className="h6">Visits</p>
        <h6 className="text-muted">{visits}</h6>
      </div>
    );
  }
}

export default Visit;
