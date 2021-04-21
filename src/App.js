import React, { Component } from 'react';
import CreateView from './components/Create/CreateView';
import HeaderView from './components/Header/HeaderView';
import SearchView from './components/Search/SearchView';
import TableView from './components/Table/TableView';
import DataUser from './data/Data.json';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: false,
      data: [],
      searchData: '',
      stateEdit: false,
      navChange: {}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('username')===null)
    {
      localStorage.setItem('username',JSON.stringify(DataUser));
    }
    else
    {
      let getData = JSON.parse(localStorage.getItem('username'));
      this.setState({
        data : getData
      });
    }
  }
  
  setStateEditForm = () => {
    this.setState({
      stateEdit: !this.state.stateEdit
    });
  }
  isChangeTrangThai = () => {
    this.setState({
      trangthai: !this.state.trangthai
    });
  }
  getDataGrid = (dl) => {
    this.setState({
      searchData: dl
    });
  }
  // them moi
  getDataCreate = (name, phone , quyen) => {
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.quyen = quyen;
    let items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('username',JSON.stringify(items));
  }
  getEditUser = (user) => {
    this.setState({
      navChange: user
    });
  }
  //sua doi
  upDataEdit = (info) => {
    this.state.data.forEach((item) => {
      if(item.id === info.id)
      {
        item.name = info.name;
        item.phone = info.phone;
        item.quyen = info.choice; 
      }
    })
    localStorage.setItem('username',JSON.stringify(this.state.data));
  }
  //xoa
  deleteUser = (info) => {
    var tempData = this.state.data.filter(item => item.id !== info)
    this.setState({
      data: tempData
    });
    localStorage.setItem('username',JSON.stringify(tempData));
  }
  render() { 
    console.log(this.state.data);
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchData) != -1)
      {
        ketqua.push(item);
      }
    })
    return (
     
      <div>
        <HeaderView/>
        <SearchView getDataGrids={(dl)=>this.getDataGrid(dl)} stateEdits={this.state.stateEdit} setStateEditFormss={()=>this.setStateEditForm()} navChangess={this.state.navChange} upDataEdits={(info)=>this.upDataEdit(info)}/>
       <div className="container">
        <div className="row">
          <TableView dataUserName={ketqua} getEditUsers={(user)=>this.getEditUser(user)} setStateEditForms={()=>this.setStateEditForm()} deleteUsers={(info)=>this.deleteUser(info)}/>
          <CreateView trangthais={this.state.trangthai} isChangeTrangThais={()=>this.isChangeTrangThai()} getDataCreates={(name, phone , quyen)=>this.getDataCreate(name, phone , quyen)}/>
        </div>
      </div>
      </div>
    );
  }
}
 
export default App;