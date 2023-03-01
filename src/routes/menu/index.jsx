import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div className=" h-screen w-screen bg-gray-400">
			<div className=" m-auto h-full w-full max-w-lg bg-slate-600 text-center">
				<div className=" m-auto w-full p-4 text-center text-red-400">
					<h1 className=" text-2xl font-bold uppercase">
						AR Rock Paper Scissors
					</h1>
				</div>
				<div className=" w-full bg-slate-500 p-4">
					<div className=" m-auto w-3/4">
						<ul className=" w-full">
							<li className=" btn-menu">
								<Link to={'/game'}>Start Game</Link>
							</li>
							<li className=" btn-menu">
								<Link to={'/tutorial'}>Tutorial</Link>
							</li>
							<li className=" btn-menu">
								<Link to={'/about'}>About</Link>
							</li>
							<li className=" btn-menu">
								<Link to={'/contacts'}>Contacts</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
