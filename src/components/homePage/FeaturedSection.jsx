import { getBooks } from "@/lib/data";
import BooksCard from "../shared/BooksCard";


const FeaturedSection = async () => {
    const books = await getBooks();

    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold">Featured Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    books.slice(0, 4).map(book => (
                        <div key={book.id}
                            className="animate__animated animate__fadeInUp transition duration-300 hover:scale-100 hover:shadow-xl"
                        >
                            <BooksCard book={book} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedSection;