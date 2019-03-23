import { h, Component } from 'preact';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Profile extends Component {
  render({ user }) {
    return (
      <div class={`${style.profile} page`}>
        <h1>Profile: {user}</h1>
      </div>
    );
  }
}
