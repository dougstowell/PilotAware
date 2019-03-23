import { h, Component } from 'preact';
import style from './style';

export default class Radar extends Component {
  render() {
    return (
      <div class={`${style.radar} page`}>
        <h1>Radar</h1>
      </div>
    );
  }
}
