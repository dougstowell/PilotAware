import { h, Component } from 'preact';
import { route } from 'preact-router';
import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import StatusLight from '../status-light';
import StatusLightSwitch from '../status-light-switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';
// import style from './style';

export default class Header extends Component {
  closeDrawer() {
    this.drawer.MDComponent.open = false;
    this.state = {
      darkThemeEnabled: false
    };
  }

  openDrawer = () => (this.drawer.MDComponent.open = true);

  openSettings = () => this.dialog.MDComponent.show();

  drawerRef = drawer => (this.drawer = drawer);
  dialogRef = dialog => (this.dialog = dialog);

  linkTo = path => () => {
    route(path);
    this.closeDrawer();
  };

  goHome = this.linkTo('/');
  goToRadar = this.linkTo('/radar');
  goToTracks = this.linkTo('/tracks');
  goToMyProfile = this.linkTo('/profile');
  goToPosition = this.linkTo('/position');

  toggleTheme = () => {
    this.setState(
      {
        darkThemeEnabled: !this.state.darkThemeEnabled
      },
      () => {
        if (this.state.darkThemeEnabled) {
          document.body.classList.add('mdc-theme--dark');
        }
        else {
          document.body.classList.remove('mdc-theme--dark');
        }
      }
    );
  }

  render(props) {
    return (
      <div>
        <TopAppBar style="background-color: #000;" className="topappbar">
          <TopAppBar.Row>
            <TopAppBar.Section align-start>
              <TopAppBar.Icon menu onClick={this.openDrawer}>
                menu
              </TopAppBar.Icon>
              <TopAppBar.Title>PilotAware</TopAppBar.Title>
            </TopAppBar.Section>

            <TopAppBar.Section align-start>
              <StatusLight title="Clients" />
            </TopAppBar.Section>
            <TopAppBar.Section align-start>
              <StatusLight title="ADS-B" />
            </TopAppBar.Section>
            <TopAppBar.Section align-start>
              <StatusLight title="RXTX" />
            </TopAppBar.Section>
            <TopAppBar.Section align-start>
              <StatusLight title="Altimeter" />
            </TopAppBar.Section>
            <TopAppBar.Section align-start>
              <StatusLight title="GPS" />
            </TopAppBar.Section>
            <TopAppBar.Section align-start>
              <StatusLight title="System" />
            </TopAppBar.Section>
            <TopAppBar.Section align-start>
              <StatusLight title="Alert" />
            </TopAppBar.Section>
            <TopAppBar.Section align-start>
              <StatusLightSwitch />
            </TopAppBar.Section>

            <TopAppBar.Section align-end shrink-to-fit onClick={this.openSettings}>
              <TopAppBar.Icon>settings</TopAppBar.Icon>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>

        <Drawer modal ref={this.drawerRef}>
          <Drawer.DrawerContent>
            <Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
              <List.ItemGraphic>home</List.ItemGraphic>
              Home
            </Drawer.DrawerItem>
            <Drawer.DrawerItem selected={props.selectedRoute === '/radar'} onClick={this.goToRadar}>
              <List.ItemGraphic>track_changes</List.ItemGraphic>
              Radar
            </Drawer.DrawerItem>
            <Drawer.DrawerItem selected={props.selectedRoute === '/tracks'} onClick={this.goToTracks}>
              <List.ItemGraphic>timeline</List.ItemGraphic>
              Tracks
            </Drawer.DrawerItem>
            <Drawer.DrawerItem selected={props.selectedRoute === '/profile'} onClick={this.goToMyProfile}>
              <List.ItemGraphic>account_circle</List.ItemGraphic>
              Profile
            </Drawer.DrawerItem>
            <Drawer.DrawerItem selected={props.selectedRoute === '/position'} onClick={this.goToPosition}>
              <List.ItemGraphic>blur_on</List.ItemGraphic>
              Position
            </Drawer.DrawerItem>
          </Drawer.DrawerContent>
        </Drawer>

        <Dialog ref={this.dialogRef}>
          <Dialog.Header>Settings</Dialog.Header>
          <Dialog.Body>
            <div>
              Change theme <Switch onClick={this.toggleTheme} />
            </div>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton accept>OK</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
