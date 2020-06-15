import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from "axios";
import MaterialTable from 'material-table';
import Header from './Header'
import Footer from './Footer';

class UserLandingPage extends Component  {
    constructor(props) {
        super(props)    
        this.state = {
             loggedIn: true,
             isLoaded: false,
             error: '',
             data: []
        }

        this.columns = [
            { title: 'FULL NAME', field: 'name' },
            { title: 'PHONE', field: 'phone' },
            { title: 'USER NAME', field: 'username' },
            { title: 'COMPANY NAME', field: 'company.name' },
        ]

        this.logOut = this.logOut.bind(this);
    }
      
    logOut() {
        this.setState({loggedIn: false}); 
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(
            result => {
              this.setState({
                isLoaded: true,
                data: result.data
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
          );
      }

    render() {
        let token = localStorage.getItem('token')
        if(!token) {
            return <Redirect to = '/' />
        }  
        const { error, isLoaded, data } = this.state;
        if (error) {
        return <div style={{textAlign:"center"}}>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div style={{textAlign:"center"}}>Loading...</div>;
        } else {
        console.log(data);

        return (
            <React.Fragment>
                <Header loggedIn={this.state.loggedIn} logOut={this.logOut}/>

                <div className="container-fluid">
                    <MaterialTable
                        title='USER INFORMATION'
                        columns={this.columns}
                        data={data}
                        onRowClick={() => window.location.replace('/drag-and-drop')}
                        
                    />
                </div>
                
                <Footer />
            </React.Fragment>
        )}}
        }
    

export default UserLandingPage
