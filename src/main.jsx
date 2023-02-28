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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Menu />} errorElement={<ErrorPage />} />
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
