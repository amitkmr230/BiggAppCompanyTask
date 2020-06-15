import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer style={{backgroundColor:"black"}}>
                    <p>
                        Created with <i className="fa fa-heart"></i> by Amit Mahapatra
                    </p>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer
