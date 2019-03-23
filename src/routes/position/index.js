import { h, Component } from 'preact';
import style from './style';

export default class Radar extends Component {
  render() {
    return (
      <div class={`${style.position} page`}>
        <h1>Position</h1>
      </div>
    );
  }
}
