'use client';

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-200 mt-16 border-t border-gray-300">

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <Link href={'/'} className="flex items-center gap-2">
                        <Image
                            src={"/logo-nav.png"}
                            alt="logo"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />

                        <span className="text-2xl font-bold text-gray-800">
                            BookBee
                        </span>
                    </Link>

                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                        Discover, borrow, and explore thousands of books across different categories.
                        Your smart digital library experience.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Contact Us
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600">
                        <p>Email: support@onlinebookborrow.com</p>
                        <p>Phone: +880 1818299406</p>
                        <p>Location: Chattogram, Bangladesh</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Follow Us
                    </h3>

                    <div className="flex gap-3">

                        <a
                            href="#"
                            className="p-3 bg-white text-gray-700 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="p-3 bg-white text-gray-700 rounded-full shadow hover:bg-sky-500 hover:text-white transition duration-300"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="#"
                            className="p-3 bg-white text-gray-700 rounded-full shadow hover:bg-blue-700 hover:text-white transition duration-300"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="#"
                            className="p-3 bg-white text-gray-700 rounded-full shadow hover:bg-gray-800 hover:text-white transition duration-300"
                        >
                            <FaGithub />
                        </a>

                    </div>
                </div>

            </div>

            <div className="border-t border-gray-300 text-center py-5 text-sm text-gray-600">
                © 2026 BookBee. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;