const ErrorPage = ({ error }) => {
	const goBack = () => {
		history.back();
	};
	return (
		<div className="grid h-screen w-screen content-center bg-slate-700">
			<div className="m-auto w-full text-center">
				<p className="text-xl text-white">Error : {error || '-_-'}</p>
			</div>
			<div className="border-accent bg-primary_bg m-auto my-10 w-3/4 max-w-md cursor-pointer rounded-md border-2 bg-gray-800 p-3 text-center transition-all hover:bg-opacity-70">
				<button
					onClick={goBack}
					className="text-lg font-bold uppercase text-white"
				>
					GO Back
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
