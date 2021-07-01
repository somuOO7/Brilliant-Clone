import React from 'react';
import CourseCard from './CourseCard';
import './CourseRow.css';

function CourseRow({ id, title, description, courses }) {
	return (
		<div className='courseRow'>
			<div className='courseRow__text'>
				<div className='num'>
					<p>{id}</p>
				</div>

				<div className='title'>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className='courseRow__list'>
				{courses.map((course) => (
					<CourseCard
						image={course.image}
						title={course.title}
						description={course.description}
						link={course.link}
					/>
				))}
			</div>
		</div>
	);
}

export default CourseRow;
