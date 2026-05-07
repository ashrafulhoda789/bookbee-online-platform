import { getBooks } from '@/lib/data';
import { Button } from '@heroui/react';
import Marquee from 'react-fast-marquee';

const NewArrivalsBooks = async() => {
    const books = await getBooks();
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 rounded-2xl">
            <Button variant='outline' className="bg-yellow-400 ">New Arrival</Button>
            <Marquee pauseOnHover={true}>
                {
                    books.slice(0, 3).map(n => {
                        return <span key={n.id} className="mr-10"> <span className='font-bold'>{n.title} </span>| Special Discount on Memberships...</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default NewArrivalsBooks;