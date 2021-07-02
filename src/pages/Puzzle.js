import { ArrowDropDownTwoTone } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PUZZLE from '../data/puzzle';

import './Puzzle.css';

function Puzzle() {
	const [quesIndex, setQuesIndex] = useState(0);

	useEffect(() => {
		document.title = 'Warmup Puzzles Practice Problems Online | Brilliant';
	}, []);

	useEffect(() => {
		document.getElementById(`p${quesIndex}`).style.backgroundColor =
			'#FFC500';
	}, [quesIndex]);

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		var data = e.dataTransfer.getData('image');
		e.target.appendChild(document.getElementById(data));
	};

	const handleDrag = (e) => {
		e.dataTransfer.setData('image', e.target.id);
	};

	return (
		<div className='puzzle'>
			<div className='puzzle__questionBox'>
				<div className='question'>
					{PUZZLE[quesIndex].image && (
						<img src={PUZZLE[quesIndex].image} alt='' />
					)}

					<p>{PUZZLE[quesIndex].question}</p>
					{PUZZLE[quesIndex].list && (
						<ul>
							{PUZZLE[quesIndex].list.map((item) => (
								<li>{item}</li>
							))}
						</ul>
					)}

					{PUZZLE[quesIndex].draggables && (
						<div>
							<strong>Drag the characters into the boxes.</strong>
							<div className='puzzle__dragBox'>
								{PUZZLE[quesIndex].draggables.map(
									(_, index) => (
										<div
											id={`div${index}`}
											onDragOver={handleDragOver}
											onDrop={handleDrop}
										/>
									)
								)}
							</div>

							<div className='puzzle__draggable'>
								{PUZZLE[quesIndex].draggables.map(
									(item, index) => (
										<div>
											<img
												id={`drag${index}`}
												src={item.image}
												alt=''
												draggable={true}
												onDragStart={handleDrag}
											/>
											<p>{item.name}</p>
										</div>
									)
								)}
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

				<div className='puzzle__answerBtn'>
					<Button size='small' variant='outlined'>
						Show explanation
					</Button>
					<Button disabled size='small' variant='contained'>
						Check answer
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Puzzle;
