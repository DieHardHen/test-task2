import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import {blueGrey500} from 'material-ui/styles/colors';
import SortIcon from 'material-ui/svg-icons/av/sort-by-alpha';
import './App.css';


class sortButton extends Component {

  callSort(){
    this.props.sort(this.props.field);
  }

  render() {
    return (
      <div className="inline">
        <IconButton onTouchTap={this.callSort.bind(this)} className="GroupAdd" tooltip="Сортировать" tooltipPosition="bottom-center">
          <SortIcon className="GroupAdd" color={blueGrey500} />
        </IconButton>
      </div>
    );
  }
}

export default sortButton;
