import React from 'react';
import { Link } from 'react-router-dom';

import './CourseCard.css';

function CourseCard({ image, title, description }) {
	return (
		<Link to='/puzzle'>
			<div className='courseCard'>
				<div
					className='courseCard__image'
					style={{ backgroundImage: `url(${image})` }}
				/>
				<div className='courseCard__text'>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
			</div>
		</Link>
	);
}

export default CourseCard;
