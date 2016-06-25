import React from 'react';
import {render} from 'react-dom';

// Importing awesome component
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<p>Welcome to React World!</p>
				<AwesomeComponent />
			</div>
		);
	}
}

render (<App/>, document.getElementById('app'));