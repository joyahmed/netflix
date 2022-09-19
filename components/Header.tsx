import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { logo, profile } from '../assets';
import { navLinks } from '../constants';
const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.addEventListener('scroll', handleScroll);
	}, []);
	return (
		<header className={`${isScrolled && 'bg-[#141414]'} `}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<Image
					src={logo}
					alt='Logo'
					width={70}
					height={70}
					className='cursor-pointer object-contain'
				/>

				<ul className='hidden space-x-4 md:flex'>
					{navLinks.map((item, index) => (
						<li key={index} className='headerLink'>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className='flex items-center space-x-4 text-sm font-light'>
				<SearchIcon className='hidden h-6 w-6 sm:inline' />
				<p className='hidden lg:inline'>Kids</p>
				<BellIcon className='h-6 w-6' />
				<Link href='/'>
					<a>
						<Image
							src={profile}
							alt='Logo'
							width={30}
							height={30}
							className='cursor-pointer rounded'
						/>
					</a>
				</Link>
			</div>
		</header>
	);
};

export default Header;

