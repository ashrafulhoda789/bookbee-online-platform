'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import BooksCard from './BooksCard';
import { Pagination } from 'swiper/modules';

const BorrowBooks = ({books}) => {
    const mostBorrow = books.sort((a,b) => b.borrowCount - a.borrowCount).slice(0,4)
    return (
        <div className="my-30 ">
            <h2 className="text-3xl font-bold mb-5">Most Borrowed Books</h2>


            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className='mySwiper w-10/12 mx-auto'
            >
                {
                    mostBorrow.map(book => (
                        <SwiperSlide key={book.id}>
                            <BooksCard book={book}></BooksCard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default BorrowBooks;