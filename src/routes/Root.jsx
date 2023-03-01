import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className="h-screen w-screen bg-gray-400">
			<Outlet />
		</div>
	);
};

export default Root;
