import { h, Component } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import Elevation from 'preact-material-components/Elevation';
import 'preact-material-components/Elevation/style.css';
import style from './style';

export default class Profile extends Component {
  state = {
    time: Date.now()
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  render({ user }, { time }) {
    return (
      <div class={`${style.home} page`}>
        <h1>CESSNA G-ABCD (PAWGRP)</h1>
        <div>Current time: {new Date(time).toLocaleString()}</div>

        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="1">
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2">
              <Elevation z={2} style="padding: 5px; background-color: #ccc">
                <img style="max-width: 100%; max-height: 100%;" src="../../assets/img/lat-long.png" />
              </Elevation>
              1111111
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2">
              <Elevation z={2} style="padding: 5px; background-color: #ccc">
                <img style="max-width: 100%; max-height: 100%;" src="../../assets/img/track.png" />
              </Elevation>
              222222
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2">
              <Elevation z={2} style="padding: 5px; background-color: #ccc">
                <img style="max-width: 100%; max-height: 100%;" src="../../assets/img/altitude.png" />
              </Elevation>
              3333333
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2">
              <Elevation z={2} style="padding: 5px; background-color: #ccc">
                <img style="max-width: 100%; max-height: 100%;" src="../../assets/img/clock.png" />
              </Elevation>
              44444
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2">
              <Elevation z={2} style="padding: 5px; background-color: #ccc">
                <img style="max-width: 100%; max-height: 100%;" src="../../assets/img/groundspeed.png" />
              </Elevation>
              555555
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
