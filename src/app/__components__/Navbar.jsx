'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        'Home',
        'About',
        'Education',
        'Experience',
        'Projects',
        'Resume',
        'Contact'
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='bg-[#03252e] text-[#dee2e6] px-4 md:px-20 py-6 flex items-center justify-between'>
            <h1 className='text-3xl font-extrabold tracking-tight'>Adhim Tanfitra</h1>
            
            {/* Hamburger Icon for Mobile */}
            <button
                className='md:hidden focus:outline-none'
                onClick={toggleMenu}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16m-7 6h7'
                    ></path>
                </svg>
            </button>

            {/* Desktop Nav Items */}
            <div className='hidden md:flex space-x-8 text-xl'>
                {navItems.map((item) => {
                    const href =
                        item === 'Home' ? '/' : `/${item.toLowerCase()}`
                    const isActive = pathname === href

                    return (
                        <a
                            key={item}
                            href={href}
                            className={clsx(
                                'relative transition duration-200 group',
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
            </div>

            {/* Mobile Nav Items */}
            <div
                className={clsx(
                    'md:hidden absolute top-16 left-0 w-full bg-[#03252e] text-[#dee2e6] transition-all duration-200',
                    isMenuOpen ? 'block' : 'hidden'
                )}
            >
                {navItems.map((item) => {
                    const href =
                        item === 'Home' ? '/' : `/${item.toLowerCase()}`
                    const isActive = pathname === href

                    return (
                        <a
                            key={item}
                            href={href}
                            className={clsx(
                                'block px-4 py-2 text-xl',
                                isActive
                                    ? 'font-bold text-[#CFFFB3]'
                                    : 'text-[#DEE2E6]'
                            )}
                        >
                            {item}
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}