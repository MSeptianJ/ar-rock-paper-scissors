const ErrorPage = ({ error }) => {
	const goBack = () => {
		history.back();
	};
	return (
		<>
			<div className=" absolute w-3/4 max-w-md p-3 top-24 left-1/2 transform -translate-x-1/2 bg-primary_bg border-2 rounded-md border-accent text-center transition-all">
				<p className=" text-white text-xl">{error}</p>
				<button onClick={goBack}>GO Back</button>
			</div>
			<div className=" w-screen h-screen m-auto transition-all">
				<iframe
					className="w-full h-full m-auto"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=43&showinfo=0&controls=0"
					title="Youtube Surprise Video"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
		</>
	);
};

export default ErrorPage;
