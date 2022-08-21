import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {routes} from './routes.js';

function App(){
	return(
		<div>
			<BrowserRouter>
				{routes.map((route) =>
					<Route key={route.name} element={route.element} />
				)}
			</BrowserRouter>
		</div>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));
