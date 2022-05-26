import React from 'react';
import './Project.css';
import { ProjectData } from '../../constans/db';
import { motion } from 'framer-motion';

import { BsArrowBarRight } from 'react-icons/bs';

const Project = () => {
	return (
		<div className='app__project app__container padding__section'>
			<h1 className='head-text-header'>Project</h1>

			<div className='app__project-wrapper'>
				<div className='app__project-wrapper-text'>
					<h2 className='head-text'>Projects</h2>

					<p className='p-text'>
						Di halaman ini kamu akan menemukan proyek-proyek yang
						pernah saya buat.
					</p>

					<div className='list-item'>
						{[
							'Web Development',
							'UI Design',
							'Mobile Responsive',
							'ReactJS Developer',
						].map((item) => (
							<motion.div
								whileHover={{ scale: 0.9 }}
								whileTap={{ scale: 0.9 }}>
								<BsArrowBarRight />
								<p>{item}</p>
							</motion.div>
						))}
					</div>
				</div>

				<div className='app__project-wrapper-image'>
					{ProjectData.map((card) => (
						<motion.img
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
								rotate: 360,
							}}
							whileTap={{ scale: 0.9 }}
							src={card.imageUrl}
							alt='image'
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
