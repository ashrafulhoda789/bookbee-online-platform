import BooksCard from "@/components/shared/BooksCard";
import { getBooks } from "@/lib/data";


const AllBooksPage = async () => {

    const books = await getBooks();
    // console.log(books);
    return (
        <div>
            <h2 className="text-3xl font-bold">All Books</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {books.map((book) => (
                    <div key={book.id}
                        className="animate__animated animate__fadeInUp transition duration-300 hover:scale-100 hover:shadow-xl"
                    >
                        <BooksCard book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooksPage;