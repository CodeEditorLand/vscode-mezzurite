import { withMezzurite } from "@microsoft/mezzurite-react";
import React, { Component } from "react";

import Header from "../../modules/header";

class ReactInstrumented extends Component {
	render() {
		return (
			<div>
				<Header />
				<h1>About Page</h1>
			</div>
		);
	}
}

export default withMezzurite(ReactInstrumented);
