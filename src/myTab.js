import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import data from "./data";
import './App.css';
import Sorter from './sortLib';
import UserDialog from './newUserDialog';
import GroupDialog from './newGroupDialog';
import SortBtn from './sortButton';

var groups = ["Бухгалтерия", "Охрана", "Руководство", "Продажи", "Логистика", "Отдел кадров"];

class myTab extends Component {

  constructor(props){
    super(props)
    this.state = {userGroups: groups};
    this.sortOrders = {"firstName": false, "lastName" : false, "group": false}
    this.userData = data;
    this.userAdd = this.userAdd.bind(this);
    this.groupAdd = this.groupAdd.bind(this);
    this.sort = this.sort.bind(this);
  }

  userAdd(firstName, lastName, groupIdx){

    this.userData.push({
      "key":   this.userData.length,
      "firstName": firstName,
      "lastName": lastName,
      "group": this.state.userGroups[groupIdx]
    });

    this.setState({});
  }

  setSortOrders(fnO, lnO, gO){
    this.sortOrders.firstName = fnO;
    this.sortOrders.lastName = lnO;
    this.sortOrders.group = gO;
  }

  groupAdd(val){
    var newGroups = this.state.userGroups;
    newGroups.push(val);
    this.setState({userGroups: newGroups});
  }

  sort(field){
    var newSorter = new Sorter(this.userData);
    var sortOrder = this.sortOrders[field];
    newSorter.sortData(field, sortOrder);
    this.userData = newSorter.getData();
    this.setSortOrders(false, false, false);
    this.sortOrders[field] = !sortOrder;
    this.setState({});
  }

  render() {

    return (
      <div>
          <UserDialog groups={this.state.userGroups} userAdd={this.userAdd} />
        <Table selectable={false}>
        <TableHeader displaySelectAll={false}>
        <TableRow selectable={false}>
          <TableHeaderColumn>
            <div className="inline">Имя</div>
            <SortBtn sort={this.sort} field="firstName" order={this.state.firstNameSorted} />
          </TableHeaderColumn>
          <TableHeaderColumn>
            <div className="inline">Фамилия</div>
            <SortBtn sort={this.sort}  field="lastName"  order={this.state.lastNameSorted} />
          </TableHeaderColumn>
          <TableHeaderColumn>
            <div className="inline">Группа</div>
            <GroupDialog groupAdd={this.groupAdd} />
            <SortBtn sort={this.sort}  field="group"  order={this.state.groupSorted} />
          </TableHeaderColumn>
        </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
              this.userData.map(function(el){
              return <TableRow key={el.key} selectable={false}>
                <TableRowColumn>{el.firstName}</TableRowColumn>
                <TableRowColumn>{el.lastName}</TableRowColumn>
                <TableRowColumn>{el.group}</TableRowColumn>
              </TableRow>;
            })
          }
        </TableBody>
        </Table>

      </div>
    );
  }
}

export default myTab;
