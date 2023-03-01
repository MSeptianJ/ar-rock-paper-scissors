import BtnList from './BtnList';

const Menu = () => {
	const textMenus = [
		{
			url: '/game',
			text: 'Start Game',
		},
		{
			url: '/tutorial',
			text: 'Tutorial',
		},
		{
			url: '/about',
			text: 'About',
		},
	];

	return (
		<div className="m-auto h-full w-full max-w-lg bg-slate-600 text-center">
			<div className=" m-auto w-full p-4 text-center text-red-400">
				<h1 className=" text-2xl font-bold uppercase">
					AR Rock Paper Scissors
				</h1>
			</div>
			<div className=" w-full p-4">
				<div className=" m-auto w-3/4">
					<ul className=" w-full">
						{textMenus.map((textMenu, i) => (
							<BtnList key={i} url={textMenu.url} text={textMenu.text} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
