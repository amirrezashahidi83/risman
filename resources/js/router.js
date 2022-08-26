import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';
import {routes} from './routes.js';
import { Provider } from 'react-redux'
import store from './store'
function App(){
	return(
		<div>
			<Provider store={store}>
			<BrowserRouter>
				<Routes>
					{routes.map((route) =>
						<Route key={route.path} path={route.path} element={route.element} />
					)}
				</Routes>
			</BrowserRouter>
			</Provider>
		</div>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));
