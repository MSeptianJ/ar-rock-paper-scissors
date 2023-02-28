function Menu() {
	return (
		<div className=" w-screen h-screen bg-slate-600 text-center">
			<div className=" w-full p-4 m-auto text-center text-red-400">
				<h1 className=" text-xl font-bold uppercase">AR Rock Paper Scissors</h1>
			</div>
			<div className=" w-full p-4 bg-slate-500">
				<div className=" w-3/4 m-auto">
					<ul className=" w-full">
						<li className=" btn-menu">Start Game</li>
						<li className=" btn-menu">Tutorial</li>
						<li className=" btn-menu">About</li>
						<li className=" btn-menu">Contacts</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Menu;
