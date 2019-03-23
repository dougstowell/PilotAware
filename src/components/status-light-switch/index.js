import { h, Component } from 'preact';
import Switch from 'preact-material-components/Switch';

export default class StatusLightSwitch extends Component {
  toggleStatusLights = () => {
    this.setState(
      {
        statusLightsEnabled: !this.state.statusLightsEnabled
      },
    );
  }

  render() {
    return (
      <div>
        <div style="text-align: center;"><Switch onClick={this.toggleStatusLights} /></div>
        <div style="text-align: center;"><span>Status Lights</span></div>
      </div>
    );
  }
}
