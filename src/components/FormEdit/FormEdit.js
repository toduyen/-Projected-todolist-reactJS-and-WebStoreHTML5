import React, { Component } from 'react';
 
class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: this.props.name,
            fPhone: this.props.phone,
            fChoice: this.props.choice,
            fId: this.props.id
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    buttonSave = () => {
        var info = {};
        info.id = this.state.fId;
        info.name = this.state.fName;
        info.phone = this.state.fPhone;
        info.choice = this.state.fChoice;
        this.props.upDataEditss(info);
        this.props.setStateEditFormssss();

    }
    render() { 
        return (
            <div>
            <h4 className="card-title">Thêm mới</h4>
           <div className="form-group">
               <label htmlFor />
               <input type="text" defaultValue={this.props.name} className="form-control" name="fName" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="Nhập name" />
               <small id="helpId" className="form-text text-muted">Nhập tên</small>
               <input type="text" defaultValue={this.props.phone} className="form-control" name="fPhone" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="Nhập Phone" />
               <small id="helpId" className="form-text text-muted">Nhập số điện thoại</small>
               <label htmlFor />
               <select className="form-control" defaultValue={this.props.choice} onChange={(event)=>this.isChange(event)} name="fChoice">
               <option value={1}>Admin</option>
               <option value={2}>Menber</option>
               <option value={3}>Culi</option>
               </select>
               <small id="helpId" className="form-text text-muted">Chọn quyền</small>
           </div>
           <button type="button " name="button" className="btn btn-primary form-control" onClick={()=>this.buttonSave()}>LUU</button>
       </div>
        );
    }
}
 
export default FormEdit;