import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import './App.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class newUserDialog extends Component {

  constructor(props){
    super(props)
    this.state = {open: false, groupSelectValue: 0};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
    this.handleGroupSelectChange = this.handleGroupSelectChange.bind(this);

  }

  handleOpen(){
    this.setState({open: true});
  };

  handleWrite(){
    this.props.userAdd(document.getElementById("fnInput").value, document.getElementById("lnInput").value, this.state.groupSelectValue);

    this.setState({open: false});
  };

  handleClose(){
    this.setState({open: false});
  };

  handleGroupSelectChange(e, i, v){
    this.setState({groupSelectValue: v});
  }

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
      <div>
        <FloatingActionButton className="ContentAddStyle" mini={true} onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Добавить нового сотрудника"
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          Добавить нового сотрудника.<br />
          <TextField id="fnInput" hintText="Имя"/><br />
          <TextField id="lnInput" hintText="Фамилия"/><br />
          <SelectField floatingLabelText="Группа" value={this.state.groupSelectValue} onChange={this.handleGroupSelectChange} id="grInput">
              {this.props.groups.map(function(el, i){return <MenuItem key={i} value={i} primaryText={el} />})}
          </SelectField>
        </Dialog>
      </div>
    );
  }
}

export default newUserDialog;
