import React, { Component } from 'react';
import FormEdit from '../FormEdit/FormEdit';
 
class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        this.props.getDataGrids(this.state.fName);
    }
    renderFormEdit = () => {
        if(this.props.stateEdits === true)
        {
            return(
                <FormEdit upDataEditss={(info)=>this.props.upDataEdits(info)} setStateEditFormssss={()=>this.props.setStateEditFormss()} name={this.props.navChangess.name} phone={this.props.navChangess.phone} choice={this.props.navChangess.quyen} id={this.props.navChangess.id}/>
            )
        }
    }
    render() { 
        return (
            <div className="container">
            <div className="row">
                <div classname="col-12">
                {this.renderFormEdit()}
                <br/>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <div className="form-group">
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <input type="text" className="form-control"  onChange={(event)=>this.isChange(event)} name="fName" id aria-describedby="helpId"  placeholder/>
                        <button type="button" className="btn btn-primary" onClick={(dl)=>this.props.getDataGrids(this.state.fName)}>TÌM</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
 
export default SearchView;