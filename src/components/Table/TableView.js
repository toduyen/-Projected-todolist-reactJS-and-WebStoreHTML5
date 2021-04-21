import React, { Component } from 'react';
import GridView from '../TableGridView/GridView';
class TableView extends Component {
    mapDataUser = () => this.props.dataUserName.map((value , key) => (
        <GridView getEditUserss={()=>this.props.getEditUsers(value)} key={key} name={value.name} phone={value.phone} quyen={value.quyen} stt={key} setStateEditFormss={()=>this.props.setStateEditForms()} deleteUserss={()=>this.props.deleteUsers(value.id)}/>
    ))
    render() { 
        return (
            <div className="col-8">
            <table class="table table-hover  table-responsive">
              <thead class="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Quyền</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                   {this.mapDataUser()}
                </tbody>
            </table>
          </div>
        );
    }
}
 
export default TableView;