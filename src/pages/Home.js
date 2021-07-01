import { Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import CourseRow from '../components/CourseRow';
import COURSES from '../data/courses';

import './Home.css';

function Home() {
	return (
		<div className='home'>
			<Header />

			<div className='home__body'>
				<div className='home__top'>
					<div className='home__topIntro'>
						<h1>Logic</h1>
						<h2>
							Stretch your analytic muscles with knights, knaves,
							logic gates, and more!
						</h2>
						<p>
							The beginning of our introductory math journey is
							Logic. Through these challenging problem solving
							exercises, you'll construct the critical thinking
							skills that are the basis for mathematical
							reasoning.
						</p>
						<p>
							You'll use limited information to make predictions –
							eliminating the impossible to uncover the truth.
							This course builds up to some truly mind-bending
							challenges!
							<span style={{ textDecoration: 'underline' }}>
								Read more
							</span>
						</p>
						<p style={{ textDecoration: 'underline' }}>
							View prerequisites and next steps
						</p>
					</div>

					<div className='home__topCard'>
						<Search />
						<div className='card__text'>
							<div>
								<h3>37</h3>
								<p>Interactive quizzes</p>
							</div>

							<div>
								<h3>265+</h3>
								<p>Concepts and exercises</p>
							</div>
						</div>
						<div className='card__button'>
							<Button
								variant='contained'
								style={{
									backgroundColor: '#000',
									color: '#fff',
								}}
							>
								Start Course
							</Button>
						</div>
					</div>
				</div>

				<div className='home__courses'>
					{COURSES.map((course) => (
						<CourseRow
							key={course.id}
							id={course.id}
							title={course.title}
							description={course.description}
							courses={course.courses}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
