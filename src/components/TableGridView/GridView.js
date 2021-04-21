import React, { Component } from 'react';
 
class GridView extends Component {
    quenHanPhanQuen = () => {
        let phanquyen = ``;
        switch (this.props.quyen) {
            case "1":
               phanquyen = `Admin`;
                break;
                case "2":
                    phanquyen = `Mentor`;
                    break;
                    case "3":
                        phanquyen = `culi`;
                        break;
                      
        
            default:
                return null
               
        }
        return phanquyen;
    }
    editFun = () => {
        this.props.getEditUserss();
        this.props.setStateEditFormss();
    }
    deleteFun = () => {
        this.props.deleteUserss();
    }
    render() { 
        return (
            <tr>
            <td scope="row">{this.props.stt}</td>
            <td>{this.props.name}</td>
            <td>{this.props.phone}</td>
            <td>{this.quenHanPhanQuen()}</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={()=>this.editFun()}>EDIT</button>
                <button type="button" className="btn btn-dark" onClick={()=>this.deleteFun()}>DELETE</button>
              </div>
            </td>
          </tr>
        );
    }
}
 
export default GridView;