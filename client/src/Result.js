import React, { Component } from 'react';
import './Result.css';
import './utils.css';

export default class Result extends Component {
  render() {
    return (
      <div id="content">
        <div id="restaurant" className="h2 mt-10 color-pink-600">{this.props.result}</div>
        <div id="timestamp" className="text-gray">{this.props.timestamp}</div>
        <div className="text-gray">
          <span>你今天已经尝试了</span>
          <span id="counter">{this.props.counter}</span>
          <span>次 :)</span>
        </div>
      </div>
    );
  }
}
