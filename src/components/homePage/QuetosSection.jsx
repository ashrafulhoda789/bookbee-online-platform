import { getQuetos } from '@/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const QuetosSection = async () => {
    const quetos = await getQuetos();
    return (
        <div className="my-10 bg-yellow-50 rounded-2xl py-6">

            <Marquee pauseOnHover={true} speed={50}>
                {quetos.map((quote, index) => (
                    <div
                        key={index}
                        className="mx-4 bg-linear-to-r from-blue-50 to-indigo-50 
                        p-6 rounded-2xl shadow-md border hover:shadow-xl 
                        transition duration-300 w-75 h-50"
                    >
                        <p className="text-gray-700 text-lg leading-relaxed">
                            “{quote.text}”
                        </p>

                        <p className="mt-4 text-sm text-gray-500 font-medium">
                            — {quote.author}
                        </p>
                    </div>
                ))}
            </Marquee>

        </div>
    );
};

export default QuetosSection;