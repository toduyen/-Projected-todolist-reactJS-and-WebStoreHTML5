import React, { Component } from 'react';
 
class HeaderView extends Component {
    render() { 
        return (
            <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-3">MANAGER USER</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>More info</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default HeaderView;