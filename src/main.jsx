import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import './assets/styles/index.css';
import About from './routes/about';
import Auth from './routes/auth';
import ErrorPage from './routes/ErrorPage';
import Game from './routes/game';
import Menu from './routes/menu';
import Root from './routes/Root';
import Tutorial from './routes/tutorial';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route index element={<Menu />} />
			<Route path="/auth" element={<Auth />} />
			<Route path="/game" element={<Game />} />
			<Route path="/about" element={<About />} />
			<Route path="/tutorial" element={<Tutorial />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
