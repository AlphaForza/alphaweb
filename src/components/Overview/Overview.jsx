import React from 'react';
import { MdNetworkCheck } from 'react-icons/md';
import { image } from '../../constans';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import './Overview.css';
const Overview = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const animation = useAnimation();
	const animationTwo = useAnimation();

	// animate with useeffect and framer-motion
	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: 'spring',
					duration: 3,
					bounce: 0.3,
				},
			});
			animationTwo.start({
				x: 0,
				transition: {
					type: 'spring',
					duration: 3,
					bounce: 0.3,
				},
			});
		}
		if (!inView) {
			animation.start({ x: '100vw' });
			animationTwo.start({ x: '-100vw' });
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			id='Overview'
			className='app__overview app__container padding__section'>
			<h1 className='head-text-overview'>Overview</h1>

			<motion.div
				animate={animationTwo}
				className='app__overview-text'>
				<h2 className='head-text'>Overview</h2>

				<p className='p-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Assumenda deserunt dicta fugiat asperiores alias magni
					dolore voluptatem aspernatur vitae praesentium!
				</p>

				<div className='app__overview-text-partOne'>
					<h3>I am work in Google</h3>
					{[
						{ title: 'Work in Google', icon: <MdNetworkCheck /> },
						{ title: 'Work in Facebook', icon: <MdNetworkCheck /> },
						{ title: 'Work in Youtube', icon: <MdNetworkCheck /> },
					].map((item) => (
						<div key={item.title} className='app__overview-card'>
							<div className='icon'>{item.icon}</div>

							<p className='p-text'>{item.title}</p>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div animate={animation} className='app__overview-image'>
				<img src={image.overviewImage} alt='imageOverview' />
			</motion.div>
		</div>
	);
};

export default Overview;
