import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div className="h-screen w-screen bg-gray-400">
			<div className="m-auto h-full w-full max-w-lg bg-slate-600 text-center">
				<div className=" m-auto w-full p-4 text-center text-red-400">
					<h1 className=" text-2xl font-bold uppercase">
						AR Rock Paper Scissors
					</h1>
				</div>
				<div className=" w-full p-4">
					<div className=" m-auto w-3/4">
						<ul className=" w-full">
							<li className=" my-8 w-full rounded-md bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
								<Link
									className=" m-auto block w-full cursor-pointer p-4"
									to={'/game'}
								>
									Start Game
								</Link>
							</li>
							<li className=" my-8 w-full rounded-md bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
								<Link
									className=" m-auto block w-full cursor-pointer p-4"
									to={'/tutorial'}
								>
									Tutorial
								</Link>
							</li>
							<li className=" my-8 w-full rounded-md bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
								<Link
									className=" m-auto block w-full cursor-pointer p-4"
									to={'/about'}
								>
									About
								</Link>
							</li>
							<li className=" my-8 w-full rounded-md bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
								<Link
									className=" m-auto block w-full cursor-pointer p-4"
									to={'/contacts'}
								>
									Contacts
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
