import { h, Component } from 'preact';
import Icon from 'preact-material-components/Icon';
import Fab from 'preact-material-components/Fab';
import style from './style';

export default class StatusLight extends Component {
  render() {
    return (
      <div>
        <div style="text-align: center;"><Icon style="font-size: 40px; color: green">check_circle</Icon></div>
        <div style="text-align: center;"><span>{this.props.title}</span></div>
      </div>
    );
  }
}
