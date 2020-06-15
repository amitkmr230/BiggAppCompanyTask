import React, { Component } from 'react'

export class header extends Component {

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.replace("/")
  }
    render() {
        return (
            <React.Fragment>
                <nav style={{backgroundColor:"black", marginBottom: "2em", padding: "1em"}}>
                  <div className="nav-wrapper">
                    <div className="brand-logo" style={{paddingLeft:"1em", margin:"auto"}}>
                      <span style={{color:"#65CEF6", fontWeight: "bolder", fontSize: "20px"}}>BigApp</span>
                      <span style={{color:"#FCC42E", fontWeight: "bolder", fontSize: "20px"}}>Company.com</span>

                      {(this.props.loggedIn === true) ?

                      (<button onClick={this.logOut} style={{float:'right', backgroundColor:"red", borderRadius:"50%"}}><i className="fas fa-sign-out-alt signOut" style={{color: "white"}}></i></button>) : null }

                    </div>      
                    
                  </div>
                  
                </nav>
            </React.Fragment>
        )
    }
}

export default header
