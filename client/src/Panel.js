import React, { Component } from 'react';
import './Panel.css';
import './utils.css';
import Result from './Result';
import RestaurantService from './services/restaurant';
import CounterService from './services/counter';
import logo from '../public/favicon.png';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      result: undefined,
      timestamp: undefined,
      counter: 0
    };
    this.restaurantService = new RestaurantService();
    this.counterService = new CounterService();
  }

  componentWillMount() {
    this.handleTryAgain();
  }

  render() {
    let loading = this.state.loading;
    return (
      <div className="panel">
        <div className="panel-header text-center">
          <figure className="avatar avatar-lg">
            <img src={logo} alt="Logo"></img>
          </figure>
          <div className="panel-title h2 mt-10">Chi Shen Me?</div>
        </div>
        <div className="panel-body text-center">
          {loading && <div id="loading" className="h2 mt-10 color-pink-600 loading-container">Loading...</div>}
          {!loading && <Result result={this.state.result} timestamp={this.state.timestamp} counter={this.state.counter}/>}
        </div>
        <div className="panel-footer text-center">
          <button type="button" className={'btn btn-pink-400 ' + (this.state.loading ? 'loading' : '')}
            onClick={this.handleTryAgain.bind(this)}>try again</button>
        </div>
      </div>
    );

  }

  handleTryAgain() {
    this.setState({
      loading: true
    });

    this.restaurantService.random()
    .then(result => {
      let counter = this.addCounter();
      this.setState({
        loading: false,
        result: result,
        timestamp: new Date().toLocaleString(),
        counter: counter
      });
    });
  }

  addCounter() {
    let counter = this.counterService.counter;
    counter.value += 1;
    this.counterService.counter = counter;

    return counter.value;
  }
}

export default Panel;
