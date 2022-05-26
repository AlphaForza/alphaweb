import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

import { skillData } from '../../constans/db';

const Skills = () => {
	return (
		<div
			id='Skills'
			className='app__skills app__container padding__section'>
			<h1 className='head-text-skills'>Skills</h1>
			<div className='app__skills-wrapper'>
				<h2>Skills</h2>

				<p className='p-text'>
					This is my skills and programer language on whitch i'am
					working
				</p>

				<div className='app__skills-card'>
					{skillData.map((item) => (
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className='app__skills-card-item'
							key={item.title}>
							<img src={item.imageUrl} alt={item.title} />
							<h3>{item.title}</h3>
							<p>{item.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
