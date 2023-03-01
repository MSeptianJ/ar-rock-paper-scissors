import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import './assets/styles/index.css';
import Menu from './routes/menu';
import ErrorPage from './routes/ErrorPage';
import Game from './routes/game';
import About from './routes/about';
import Tutorial from './routes/tutorial';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route index path="/" element={<Menu />} errorElement={<ErrorPage />} />
			<Route path="/game" element={<Game />} errorElement={<ErrorPage />} />
			<Route path="/about" element={<About />} errorElement={<ErrorPage />} />
			<Route
				path="/tutorial"
				element={<Tutorial />}
				errorElement={<ErrorPage />}
			/>
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
