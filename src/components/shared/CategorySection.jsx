import { getCategory } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

const CategorySection = async () => {
    const categories = await getCategory();
    return (
        <div className="">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Categories 
            </h2>

            <div className="flex flex-row lg:flex-col gap-4">

                {categories.map(category => (

                    <Link
                        key={category.id}
                        href={`?category=${category.name.toLowerCase()}`}
                        className="w-full"
                    >
                        <div
                            className="bg-yellow-50 border border-yellow-100 hover:bg-yellow-400 hover:text-gray-900 text-gray-700 font-medium px-5 py-3 rounded-xl  transition duration-300 shadow-sm hover:shadow-md text-center cursor-pointer"
                        >
                            {category.name}
                        </div>
                    </Link>

                ))}

            </div>

        </div>
    );
};

export default CategorySection;