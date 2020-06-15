import React, { Component } from 'react';
import { Redirect } from 'react-router';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import Header from './Header'
import Footer from './Footer';

export class DragAndDrop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loggedIn: true
        }
        this.logOut = this.logOut.bind(this)
    }

    logOut() {
        this.setState({loggedIn: false}); 
    }    

    componentDidMount() {
        $('#draggable1').draggable();
        $('#draggable2').draggable();
        $('#draggable3').draggable();
        $('#draggable4').draggable();
        $('#draggable5').draggable();
        $('#draggable6').draggable();
        $('#draggable7').draggable();
    }

    render() {
        let token = localStorage.getItem('token')
        if(!token) {
            return <Redirect to = '/' />
        }  
        return (
            <React.Fragment>
                <Header loggedIn={this.state.loggedIn} logOut={this.logOut}/>

                <div className="container dndcontainer">
                    <div className='showName'>
                        <i style={{fontSize:"20px", cursor:"pointer"}} className="fa" onClick={() => window.location.replace('/user')}>&#xf00d;</i>
                        <h3 className="p-1 ml-3">Omprakash</h3>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-5">                        
                            <input type="text" className="form-control" placeholder="Search Permissions" aria-label="Username" aria-describedby="basic-addon1"/>
                            <button className="btn-block" style={{backgroundColor:"white", border: "none", textAlign:"left"}}>Select All</button>

                            <div id="draggable1" className="card type">
                            <p className="card-header primary-color white-text">Travel</p>
                            </div>

                            <div id="draggable2" className="card">
                            <p className="card-header primary-color white-text">Rule Class</p>
                            </div>

                            <div id="draggable3" className="card type">
                            <p className="card-header primary-color white-text">Travel Policy</p>
                            </div>

                            <div id="draggable4" className="card">
                            <p className="card-header primary-color white-text">Policy Violation Reasons</p>
                            </div>

                            <div id="draggable5" className="card type">
                            <p className="card-header primary-color white-text">Travel Rule</p>
                            </div>

                            <div id="draggable6" className="card">
                            <p className="card-header primary-color white-text">Travel Vendor Exclusion</p>
                            </div>

                            <div id="draggable7" className="card type">
                            <p className="card-header primary-color white-text">Travel discount</p>
                            </div>
                            
                        </div>

                        <div className="col-md-2 text-center m-auto">
                            <i className="fa fa-play-circle" style={{color:"#357BFD", fontSize: "30px"}} aria-hidden="true"></i>
                            <br/>
                            <i className="fa fa-play-circle" style={{color:"#357BFD", fontSize: "30px", transform: "rotateZ(180deg)"}} aria-hidden="true"></i>
                        </div>

                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder="Search Permissions" aria-label="Username" aria-describedby="basic-addon1"/>
                            <button className="btn-block" style={{backgroundColor:"white", border: "none", textAlign:"left"}}>Select All</button>
                        </div>
                    </div>
                    
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

export default DragAndDrop
