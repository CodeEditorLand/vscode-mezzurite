import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import AppContainer from "./AppContainer.js";
import GBBottom from "./GBBottom/GBBottom";
import GBForm from "./GBForm/GBForm";
import GBList from "./GBList/GBList";
import Header from "./Header/Header";

class ReactNotInstrumentedParentheses extends Component {
	render() {
		return (
			<Router>
				<AppContainer>
					<Header />
					<Route exact path="/" component={GBForm} />
					<Route exact path="/guestbook" component={GBList} />
					<GBBottom />
				</AppContainer>
			</Router>
		);
	}
}

App.displayName = "App";
export default ReactNotInstrumentedParentheses;
