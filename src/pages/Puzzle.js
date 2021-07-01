import { ArrowDropDownTwoTone } from '@material-ui/icons';
import React, { useEffect } from 'react';
import PUZZLE from '../data/puzzle';

import './Puzzle.css';

function Puzzle() {
	useEffect(() => {
		document.title = 'Warmup Puzzles Practice Problems Online | Brilliant';
	}, []);

	useEffect(() => {
		document.getElementById('p0').style.backgroundColor = '#FFC500';
	}, []);

	return (
		<div className='puzzle'>
			<div className='puzzle__questionBox'>
				<div className='question'>
					{PUZZLE[0].image && <img src={PUZZLE[0].image} alt='' />}

					<p>{PUZZLE[0].question}</p>
					{PUZZLE[0].list && (
						<ul>
							{PUZZLE[0].list.map((item) => (
								<li>{item}</li>
							))}
						</ul>
					)}

					{PUZZLE[0].draggables && (
						<div>
							<strong>Drag the characters into the boxes.</strong>
							<div className='puzzle__dragBox'>
								{PUZZLE[0].draggables.map((_, index) => (
									<div id={`div${index}`} />
								))}
							</div>

							<div className='puzzle__draggable'>
								{PUZZLE[0].draggables.map((item, index) => (
									<div>
										<img
											id={`drag${index}`}
											src={item}
											alt=''
											draggable={true}
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>

			<div className='puzzle__action'>
				<div>
					<p>Lesson 1</p>
					<ArrowDropDownTwoTone />
				</div>

				<h4>WARMUP PUZZLES</h4>

				<div className='puzzle__pagination'>
					<div id='p0'></div>
					<div id='p1'></div>
					<div id='p2'></div>
					<div id='p3'></div>
					<div id='p4'></div>
					<div id='p5'></div>
				</div>
			</div>
		</div>
	);
}

export default Puzzle;
