import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Login extends Component {
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-md-5 mx-auto border rounded mt-4 bg-white">
						<div class="mb-3">
							<div class="col-md-12 text-center pt-3">
								<h1>Login</h1>
							</div>
						</div>
						<label for="emailInput">Email address</label>
						<input
							type="email"
							name="email"
							class="form-control"
							aria-describedby="emailHelp"
							id="email"
							placeholder="Enter email"
						></input>
						<label for="emailInput" class="pt-3">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							class="form-control"
							aria-describedby="emailHelp"
							placeholder="Enter Password"
						></input>
						<div class="col-md-12 text-center mt-3">
							<button className="btn btn-outline-success text-uppercase mb-1 px-5">
								Submit
							</button>
							<p class="text-center pt-2">
								Don't have account?
								<br />
								<button class="btn btn-link">Sign Up Here</button>
							</p>
							<div>
								<React.Fragment>
									<Link to="/">
										<button className="btn btn-outline-info text-uppercase mb-3 px-5">
											Back
										</button>
									</Link>
								</React.Fragment>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
