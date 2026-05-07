'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = <>
        <li>
            <Link href="/" className="transition-colors hover:text-yellow-600">Home</Link>
        </li>
        <li>
            <Link href="/all-books" className=" transition-colors hover:text-yellow-600">All Books</Link>
        </li>
        <li>
            <Link href="/profile" className="transition-colors hover:text-yellow-600">My Profile</Link>
        </li>
    </>

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div>
                        <Link href={'/'}>
                            <Image
                                src={'/logo-nav.png'}
                                alt="BookBee"
                                width={80}
                                height={80}
                                className="rounded-full"
                            ></Image>
                        </Link>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex ">
                    {links}
                </ul>
                <div className="flex gap-2">
                    <Link href={'/signin'}>
                        <Button className={'bg-yellow-400 text-black transition hover:bg-yellow-300 font-bold'}>Login</Button>
                    </Link>
                    <Link href={'/signup'}>
                        <Button className={'bg-yellow-400 text-black transition hover:bg-yellow-300 font-bold'}>Register</Button>
                    </Link>
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {links}
                    </ul>

                </div>
            )}
        </nav>
    );
};

export default Navbar;