import React, { useState } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Information from './components/Information'
function App() {
	const [count, setCount] = useState(0);
	const [total, setTotal] = useState(0);
	const handleIncrease = () => {
		setCount(count + 1);
	};

	const handleDecrease = () => {
		setCount(count - 1);
	};
	const hanldeTotal = (i) => {
		setTotal((prev) => prev + i);
	};

	return (
		<>
			<div className="w-full min-h-screen flex flex-col items-center max-w-[1440px] pb-[3rem] m-auto">
				<Header count={total} setTotal={setTotal} />
				<main className='w-full h-full flex items-center md:max-w-[1014px]'>
					<div className="flex justify-between w-full flex-col md:flex-row">
						<Gallery />
						<Information
							count={count}
							handleIncrease={handleIncrease}
							handleDecrease={handleDecrease}
							handleTotal={hanldeTotal}
						/>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
