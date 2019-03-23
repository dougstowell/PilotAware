import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Radar from '../routes/radar';
import Tracks from '../routes/tracks';
import Profile from '../routes/profile';
import Position from '../routes/position';
import NotFound from '../routes/404';

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = e => {
    this.setState({
      currentUrl: e.url
    });
  };

  render() {
    return (
      <div id="app">
        <Header selectedRoute={this.state.currentUrl} />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Radar path="/radar/" />
          <Tracks path="/tracks/" />
          <Profile path="/profile/" user="me" />
          <Position path="/position/" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}
