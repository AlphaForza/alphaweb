import React from 'react';
import './Header.css';
import { image } from '../../constans/index';
import { motion } from 'framer-motion';

// framer motion hook
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Header = () => {
	const [ref, inView] = useInView();
	const animateOne = useAnimation();
	const animateTwo = useAnimation();

	useEffect(() => {
		if (inView) {
			animateOne.start({
				x: 0,
				transition: { ease: 'easeOut', duration: 1 },
			});
			animateTwo.start({
				rotate: 360,
				transition: { duration: 1.5 },
			});
		}
		if (!inView) {
			animateOne.start({
				x: '-100vw',
			});
			animateTwo.start({
				rotate: 0,
			});
		}
	});

	return (
		<div className='app__header  padding__section'>
			<div ref={ref} className='app__header-wrapper'>
				<motion.div animate={animateOne} className='app__header-text'>
					<h3>Hi, i'am</h3>
					<h2>Alpha Coder</h2>

					<p className='p-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Animi, dignissimos?
					</p>
					{/* ovo moram da osposobim da scroluje na dole */}
					<p className='overview-text'>
						Go To Overview <BsFillArrowDownCircleFill />
					</p>

					<div className='app__header-text-desc'>
						{[
							{ title: 'Projects', txt: '12' },
							{ title: 'Experience', txt: '2 years' },
							{ title: 'Nationality', txt: 'Serbian 🇷🇸' },
						].map((item) => (
							<div
								key={item.title}
								className='app__header-text-desc-item'>
								<p>{item.title}</p>
								<p className='text-items'>{item.txt}</p>
							</div>
						))}
					</div>
				</motion.div>
				<motion.div
					animate={animateTwo}
					className='app__header-image'>
					<img src={image.headerImg} alt='headerImg' />
				</motion.div>
			</div>
		</div>
	);
};

export default Header;
