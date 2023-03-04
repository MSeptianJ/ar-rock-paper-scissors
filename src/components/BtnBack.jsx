import React from 'react';
import { goBack } from '../helpers/helperFuncs';

const BtnBack = () => {
	return (
		<div className=" m-auto my-8 w-20 rounded-md bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
			<button
				onClick={goBack}
				className="m-auto block w-full cursor-pointer p-4"
			>
				Back
			</button>
		</div>
	);
};

export default BtnBack;
