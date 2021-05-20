/* eslint-disable react/destructuring-assignment */
import Axios from 'axios';
import React, { Component } from 'react';

class Visit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visits: 0,
    };
  }

  componentDidMount() {
    Axios.get('https://api.countapi.xyz/get/contestmania.web.app/visits').then((res) => {
      const scale = 100;
      const { value } = res.data;
      const time = (2000 * scale) / value;
      let i = 1;
      const timer = setInterval(() => {
        i += 1;
        this.setState({ visits: `${(i * scale) / 1000}k` });
        if (i * scale >= value) clearInterval(timer);
      }, time);
    });
  }

  render() {
    const { visits } = this.state;
    return (
      <div className="visits inline-block border">
        <b>Visits</b>
        <br />
        {visits}
      </div>
    );
  }
}

export default Visit;
