import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-6'>
            <h2 className='font-bold text-5xl text-green-400'>This page is not found.</h2>
            <p className='font-bold text-xl text-green-900'>Back to home page</p>
            <Link href={'/'}>
                <Button className='bg-green-600'>Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;