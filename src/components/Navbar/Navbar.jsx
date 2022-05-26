import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import './Navbar.css';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='app__navbar padding__section'>
			<div className='app__navbar-menu'>
				<motion.div
					animate={{ scale: 1.7 }}
					transition={{ duration: 0.5 }}
					className='app__navbar-menu-title'>
					Alpha
				</motion.div>
				{['Overview', 'Skills', 'Projects', 'Contact'].map((item) => (
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='app__navbar-menu-list'
						key={item}>
						<li className='app__navbar-menu-list-item'>
							<a href={`#${item}`}>{item}</a>
						</li>
					</motion.div>
				))}
			</div>
			<motion.div
				animate={{ scale: 1.1 }}
				transition={{ duration: 0.5 }}
				className='app__navbar-btn'>
				<a href='#'>View Project?</a>
			</motion.div>

			<div className='app__navbar-hamburger'>
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className='menu-open'>
					<CgMenuRound onClick={() => setToggle(true)} />
				</motion.div>

				{toggle && (
					<div className='app__navbar-hamburger-wrapp'>
						<CgCloseO onClick={() => setToggle(false)} />
						{['Overview', 'Skills', 'Projects', 'Contact'].map(
							(item) => (
								<motion.div
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className='app__navbar-hamburger-list'
									key={item}>
									<li className='app__navbar-hamburger-list-item'>
										<a
											href={`#${item}`}
											onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								</motion.div>
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
