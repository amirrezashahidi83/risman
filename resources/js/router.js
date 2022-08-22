import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';
import {routes} from './routes.js';
function App(){
	return(
		<div>
			<BrowserRouter>
				<Routes>
					{routes.map((route) =>
						<Route key={route.path} path={route.path} element={route.element} />
					)}
				</Routes>
			</BrowserRouter>
		</div>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));
