import { push } from "connected-react-router";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
	decrement,
	decrementAsync,
	increment,
	incrementAsync,
} from "../../modules/counter";
import Header from "../../modules/header";
import OffscreenComponent from "../../modules/offscreenComponent";
import TestComponent from "../../modules/testComponent";

const ReactRedux = (props) => (
	<div>
		<Header />
		<TestComponent />
		<h1>Home</h1>
		<p>Count: {props.count}</p>

		<p>
			<button onClick={props.increment}>Increment</button>
			<button
				onClick={props.incrementAsync}
				disabled={props.isIncrementing}>
				Increment Async
			</button>
		</p>

		<p>
			<button onClick={props.decrement}>Decrement</button>
			<button
				onClick={props.decrementAsync}
				disabled={props.isDecrementing}>
				Decrement Async
			</button>
		</p>

		<p>
			<button onClick={() => props.changePage()}>
				Go to about page via redux
			</button>
		</p>
		<OffscreenComponent />
	</div>
);

const mapStateToProps = ({ counter }) => ({
	count: counter.count,
	isIncrementing: counter.isIncrementing,
	isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			increment,
			incrementAsync,
			decrement,
			decrementAsync,
			changePage: () => push("/about-us"),
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);
