import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Type from './components/Type';
import Login from './components/Login';
import signUp from "./components/signUp";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route path="/login" component={Login} />
					<Route path="/signUp" component={signUp} />
					<Route component={Default} />
				</Switch>
				<Type/>
			</React.Fragment>
		)
	}
}

export default App;
