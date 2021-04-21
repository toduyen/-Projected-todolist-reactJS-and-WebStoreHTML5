import React, { Component } from 'react';
 
class CreateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            fPhone: '',
            fChoice: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    renderButton = () => {
        if(this.props.trangthais === true)
        {
            return(<button type="button" name="button" className="btn btn-dark form-control mb-2" onClick={()=>this.props.isChangeTrangThais()}>ĐÓNG FORM</button>)
        }
        else
        {
            return(<button type="button" name="button" className="btn btn-primary form-control mb-2" onClick={()=>this.props.isChangeTrangThais()}>MỞ FORM</button>)
        }
    }
    renderForm = () => {
        if(this.props.trangthais === true)
        {
            return(
                <div>
                     <h4 className="card-title">Thêm mới</h4>
                    <div className="form-group">
                        <label htmlFor />
                        <input type="text" className="form-control" name="fName" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="Nhập name" />
                        <small id="helpId" className="form-text text-muted">Nhập tên</small>
                        <input type="text" className="form-control" name="fPhone" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="Nhập Phone" />
                        <small id="helpId" className="form-text text-muted">Nhập số điện thoại</small>
                        <label htmlFor />
                        <select className="form-control" onChange={(event)=>this.isChange(event)} name="fChoice">
                        <option value={1}>Admin</option>
                        <option value={2}>Menber</option>
                        <option value={3}>Culi</option>
                        </select>
                        <small id="helpId" className="form-text text-muted">Chọn quyền</small>
                    </div>
                    <button type="button " name="button" className="btn btn-primary form-control" onClick={(name, phone , quyen)=>this.props.getDataCreates(this.state.fName , this.state.fPhone , this.state.fChoice)}>THÊM MỚI</button>
                </div>
            )
        }
    }
    render() { 
        return (
            <div className="col-4">
            <div className="card border-primary">
              <div className="card-body">
                {this.renderButton()}
                {this.renderForm()}
              </div>
            </div>
          </div>
        );
    }
}
 
export default CreateView;