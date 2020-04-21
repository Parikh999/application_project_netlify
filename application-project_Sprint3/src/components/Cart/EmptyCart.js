import React from "react";
import {Link} from "react-router-dom";

export default function EmptyCart() {
	return (
		<div className="container mt-5">
			<div className="col-10 mx-auto text-center text-title">
				<h1>your cart is currently empty</h1>
			</div>
			<React.Fragment>
				<Link to="/">
					<button className="btn btn-outline-info text-uppercase mb-3 px-5">
						Back
					</button>
				</Link>
			</React.Fragment>
		</div>
	);
}
