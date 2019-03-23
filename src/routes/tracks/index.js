import { h, Component } from 'preact';
import style from './style';

export default class Radar extends Component {
  render() {
    return (
      <div class={`${style.tracks} page`}>
        <h1>Tracks</h1>
      </div>
    );
  }
}
