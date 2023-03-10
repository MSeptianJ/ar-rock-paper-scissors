import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className="h-screen w-screen bg-gray-400">
			<div className="m-auto h-full w-full max-w-lg bg-slate-600 text-center">
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
