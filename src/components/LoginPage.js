import React, { Component } from 'react'
import axios from "axios";
import Header from './Header'
import Footer from './Footer';

export class FirstPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  name: "",
		  email: "",
		  password: "",
		  loggedIn: false
		};
		this.onChange = this.onChange.bind(this);
		this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this);
		this.onLoginSubmit = this.onLoginSubmit.bind(this);
	  }
	
	  onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	  };
	
	  onRegistrationSubmit = e => {
		e.preventDefault();
		if(this.state.name === '' || this.state.email === '' || this.state.password === '') {
			return (document.getElementById("status").innerHTML =
			"Please enter the above details...")
		}
		axios
		  .post("http://localhost:5000/api/register", {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		  })
		  .then(function(response) {
			  console.log(response)
			//This is responsible for the page navigation.
			
				return response.data.success ? 
				((document.getElementById("status").innerHTML =
				  "Registration Successfull! You are being redirected to login."),
				setTimeout(() => {
				  window.location.replace("/user");
				}, 500), localStorage.setItem('token', response.data.token), localStorage.setItem('role', "user")) :			
				(document.getElementById("status").innerHTML =
				response.data.error);
			
		  });
		}

		onLoginSubmit = e => {
			e.preventDefault();
			if(this.state.email === '' || this.state.password === '') {
				return (document.getElementById("status").innerHTML =
				"Please enter the above details...")
			}
			axios.post("http://localhost:5000/api/login", {
        		email: this.state.email,
        		password: this.state.password
      })
      .then(function(response) {
        let userName = response.data.user.name;        
        console.log(response);
            return response.status
              ? ((document.getElementById("status").innerHTML =
                  "Login Successfull! You are being redirected to landing page"),
                setTimeout(() => {
                  window.location.replace(
                    "/user?name=" + userName
                  );
                }, 500), localStorage.setItem('token', response.data.token), localStorage.setItem('role', response.data.user.role))
              : (document.getElementById("status").innerHTML =
                  response.message);
          
		})
	};

	componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
		});

	}
    
    render() {
		let token = localStorage.getItem('token');
		let role = localStorage.getItem('role');
		if(token && (role === "user")) {
            return (window.location.replace('/user'))
        }  
        return (
            <React.Fragment>
                <Header/>
				<div className="container" id="container">
					<div className="form-container sign-up-container">
						<form onSubmit={this.onRegistrationSubmit}>
							<h1>Create Account</h1>
							<div className="social-container">
								<div href="#" className="social"><i className="fab fa-facebook-f"></i></div>
								<div href="#" className="social"><i className="fab fa-google-plus-g"></i></div>
								<div href="#" className="social"><i className="fab fa-linkedin-in"></i></div>
							</div>
							<span>or use your email for registration</span>
							<input type="text" placeholder="Name" name="name" onChange={this.onChange} />
							<input type="email" placeholder="Email" name="email" onChange={this.onChange} />
							<input type="password" placeholder="Password" name="password" onChange={this.onChange} />
							<button  className="buttons" type="submit">Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form onSubmit={this.onLoginSubmit}>
							<h1>Sign in</h1>
							<div className="social-container">
								<div className="social"><i className="fab fa-facebook-f"></i></div>
								<div className="social"><i className="fab fa-google-plus-g"></i></div>
								<div className="social"><i className="fab fa-linkedin-in"></i></div>
							</div>
							<span>or use your account</span>
							<input type="email" placeholder="Email" name="email" onChange={this.onChange}/>
							<input type="password" placeholder="Password" name="password" onChange={this.onChange}/>
							<button className="buttons" type="submit" style={{marginTop: "2em"}}>Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>To keep connected with us please login with your personal info</p>
								<button className="ghost buttons" id="signIn">Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>Enter your personal details and start journey with us</p>
								<button className="ghost buttons" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
				<p id="status" className="text-center"></p>
				<Footer />
            </React.Fragment>
        )
    } 
}

export default FirstPage


