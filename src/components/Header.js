import { Button } from '@material-ui/core';
import React from 'react';
import './Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					className='header__logo'
					src='https://lever-client-logos.s3-us-west-2.amazonaws.com/b3943d3b-d47e-4ac8-873d-0b6502f03bf2-1587418824789.png'
					alt=''
				/>
				<p>TODAY</p>
				<p style={{ fontWeight: 'bold' }}>COURSES</p>
			</div>

			<div className='header__right'>
				<Button
					variant='outlined'
					style={{ color: '#039BE5', border: '1px solid #039BE5' }}
				>
					Login
				</Button>
				<Button
					variant='contained'
					style={{ backgroundColor: '#039BE5', color: 'white' }}
				>
					Sign up
				</Button>
			</div>
		</div>
	);
}

export default Header;
