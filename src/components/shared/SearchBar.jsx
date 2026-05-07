'use client'

import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (e) => {
        const value = e.target.value;

        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set('q', value);
        } else {
            params.delete('q');
        }

        router.push(`/all-books?${params.toString()}`);
    };
    return (
        <input
            type="text"
            placeholder="Search by title"
            className="input input-bordered border border-yellow-300 w-full my-5 p-4 focus:outline-none focus:ring-1 focus:ring-yellow-400 "
            defaultValue={searchParams.get('q') || ''}
            onChange={handleSearch}
        />
    );
};

export default SearchBar;