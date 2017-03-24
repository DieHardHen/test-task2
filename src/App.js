import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import {white} from 'material-ui/styles/colors';
import Tab from "./myTab";
import './App.css';

const BarLeft = {
  width: 40,
  height: 40
};

injectTapEventPlugin();

class MyApp extends Component {

  constructor(props){
    super(props)
    this.state = {showButton: true};
    this.handleClick = this.handleClick.bind(this);
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleClick(e) {
    this.setState({ showButton: false });
  }

  render() {
    var documentBody = this.state.showButton ? <RaisedButton onTouchTap={this.handleClick} id="HelloButton"  label="Перейти к заданию" primary={true} className="HelloButton" /> : <Tab />;
    return (
      <div>

      <AppBar
        title="Тестовое задание"
        iconElementLeft={<HomeIcon color={white} style={BarLeft} />}
      />
      {documentBody}
      </div>
    );
  }
}

MyApp.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default MyApp;
