import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import { Home } from './components/Home';
import { Test1 } from './components/Test1';
import { Test2 } from './components/Test2';

export default class App extends Component {
	render() {
		return (
      <Router>
        <div className="app">
					<div className="container">
						<ul>
              <li>
								<Link to="/test1">Test1</Link>
							</li>
							<li>
								<Link to="/test2">Test2</Link>
							</li>
						</ul>
					</div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/test1" component={Test1} />
						<Route path="/test2" component={Test2} />
						<Route path="/test3" component={Test3} />
					</Switch>
				</div>
			</Router>
		);
	}
}
