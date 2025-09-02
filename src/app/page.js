'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
    FaSpotify,
    FaXTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaEnvelope
} from 'react-icons/fa6'
import TrueFocus from './__components__/ui/TrueFocus'
import RotatingText from './__components__/ui/RotatingText'
import Link from 'next/link'

export default function Home() {
    const pathname = usePathname()

    const navItems = [
        'Home',
        'About',
        'Education',
        'Experience',
        'Projects',
        'Resume',
        'Contact'
    ]

    return (
        <div
            className='relative h-screen w-full bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: "url('/assets/image/bg.jpg')" }}
        >
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center lg:items-start lg:pl-20 p-4'>
                <h1><TrueFocus /></h1>

                <div className='flex items-center mt-4 font-medium'>
                    <p className='font-medium text-2xl'>Hi, Folks</p>
                    <Image
                        src='/assets/image/handwave.gif'
                        alt='Waving Hand'
                        width={25}
                        height={25}
                        className='w-[25px] h-auto ml-2'
                    />
                </div>

                <div className='inline-flex items-center mt-2 space-x-2'>
                    <p className='text-2xl font-bold text-white'>I&apos;m</p>
                    <RotatingText
                        texts={['Software Developer', 'Web Developer']}
                        mainClassName='px-3 bg-[#CFFFB3] text-black py-1 rounded-lg text-xl font-bold'
                        staggerFrom={'last'}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-120%' }}
                        staggerDuration={0.025}
                        splitLevelClassName='overflow-hidden pb-1'
                        transition={{
                            type: 'spring',
                            damping: 30,
                            stiffness: 400
                        }}
                        rotationInterval={5000}
                    />
                </div>

                {/* Navigation */}
                <nav className='mt-6 flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6 text-gray-300'>
                    {navItems.map((item) => {
                        const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                        const isActive = pathname === href;

                        return (
                            <a
                                key={item}
                                href={href}
                                className={clsx(
                                    'relative transition duration-200 group mb-2 lg:mb-0',
                                    isActive
                                        ? 'font-bold text-[#CFFFB3]'
                                        : 'text-[#DEE2E6]'
                                )}
                            >
                                {item}
                                <span
                                    className={clsx(
                                        'absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#FCEC52] transition-transform duration-200',
                                        isActive
                                            ? 'scale-x-100'
                                            : 'scale-x-0 group-hover:scale-x-100'
                                    )}
                                ></span>
                            </a>
                        )
                    })}
                </nav>

                {/* Social Icons */}
                <div className='flex space-x-4 mt-6 text-gray-400'>
                    <Link href='https://open.spotify.com/user/adhim_t?si=4433c91a7164478c' target='_blank'>
                        <FaSpotify className='text-xl hover:text-[#1DB954] cursor-pointer' />
                    </Link>
                    <Link href='https://x.com/adhim_t' target='_blank'>
                        <FaXTwitter className='text-xl hover:text-[#1DA1F2] cursor-pointer' />
                    </Link>
                    <Link href='https://instagram.com/adhim_t' target='_blank'>
                        <FaInstagram className='text-xl hover:text-[#E1306C] cursor-pointer' />
                    </Link>
                    <Link href='https://linkedin.com/in/adhimtanfitra' target='_blank'>
                        <FaLinkedin className='text-xl hover:text-[#0A66C2] cursor-pointer' />
                    </Link>
                    <Link href='https://github.com/Tanfitra' target='_blank'>
                        <FaGithub className='text-xl hover:text-[#4078C0] cursor-pointer' />
                    </Link>
                    <Link href='mailto:tanfitraadhim@gmail.com'>
                        <FaEnvelope className='text-xl hover:text-[#D44638] cursor-pointer' />
                    </Link>
                </div>

                {/* Footer */}
                <div className='absolute bottom-10 left-4 lg:left-20 text-gray-400 text-center lg:text-left'>
                    <p>© 2025 All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}