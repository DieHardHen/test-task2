import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import './App.css';
import IconButton from 'material-ui/IconButton';
import {blueGrey500} from 'material-ui/styles/colors';
import GroupAdd from 'material-ui/svg-icons/social/group-add';


class newGroupDialog extends Component {

  constructor(props){
    super(props)
    this.state = {open: false};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleWrite(){
    this.props.groupAdd(document.getElementById("ngrInput").value);
    this.setState({open: false});
  };

  handleClose(){
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Добавить"
        primary={true}
        onTouchTap={this.handleWrite}
      />,
      <FlatButton
        label="Отмена"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div className="inline wide">
        <IconButton onTouchTap={this.handleOpen} className="GroupAdd" tooltip="Новая группа" tooltipPosition="bottom-left">
          <GroupAdd className="GroupAdd" color={blueGrey500} />
        </IconButton>
        <Dialog
          title="Добавить новую группу"
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          Добавить новую группу.<br />
          <TextField id="ngrInput" hintText="Название группы"/><br />
        </Dialog>
      </div>
    );
  }
}

export default newGroupDialog;
