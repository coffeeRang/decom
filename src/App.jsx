import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<div className="container" />
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</Router>
		);
	}
}
