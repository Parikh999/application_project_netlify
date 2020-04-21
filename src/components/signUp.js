import React, {Component} from "react";

class signUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: ""
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5 mx-auto border rounded mt-4 bg-white">
						<form onSubmit={this.handleSubmit}>
							<div className="mb-3">
								<div className="col-md-12 text-center pt-3">
									<h1>Sign Up</h1>
								</div>
							</div>
							<div className="inputField">
								<label htmlFor="email">Email address</label>
								<input
									type="email"
									name="email"
									className="form-control"
									aria-describedby="emailHelp"
									id="email"
									placeholder="Enter email"
									onChange={this.handleChange}
								></input>
							</div>
							<div className="inputField">
								<label htmlFor="password" className="pt-3">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									className="form-control"
									aria-describedby="password"
									placeholder="Enter Password"
									onChange={this.handleChange}
								></input>
							</div>
							<div className="inputField">
								<label htmlFor="firstName" className="pt-3">
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									className="form-control"
									aria-describedby="firstName"
									placeholder="Enter First Name"
									onChange={this.handleChange}
								></input>
							</div>
							<div className="inputField">
								<label htmlFor="lastName" className="pt-3">
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									id="lastName"
									className="form-control"
									aria-describedby="lastName"
									placeholder="Enter Last Name"
									onChange={this.handleChange}
								></input>
							</div>
							<div className="col-md-12 p-4 text-center">
								<button className="btn blue shadow-sm submit bg-light border rounded">
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default signUp;
