import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div
            className="relative my-10 flex h-125 items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/bee-banner.png')" }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-2xl text-center text-white">
                <h1 className="mb-5 text-5xl font-extrabold leading-tight">
                    Find Your{" "}
                    <span className="text-yellow-400">
                        Next Read
                    </span>
                </h1>

                <p className="mb-6 text-lg text-gray-200">
                    Discover amazing books easily and borrow
                    your favorite stories anytime.
                </p>

                <Link href="/all-books">
                    <button className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300">
                        Browse Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;