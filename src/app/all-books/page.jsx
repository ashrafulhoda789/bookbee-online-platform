import BooksCard from "@/components/shared/BooksCard";
import CategorySection from "@/components/shared/CategorySection";
import SearchBar from "@/components/shared/SearchBar";
import { getBooks } from "@/lib/data";


const AllBooksPage = async ({ searchParams }) => {

    const { category, q } = await searchParams;

    const books = await getBooks();
    // console.log(books);

    const filteredBooks = books.filter((book) => {
        const filterCategory = category
            ? book?.category?.toLowerCase() === category.toLowerCase()
            : true;

        const filterSearch = q
            ? book?.title?.toLowerCase().includes(q.toLowerCase())
            : true;

        return filterCategory && filterSearch;
    })

    return (
        <div className="my-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
                <div className="col-span-2">
                    <CategorySection></CategorySection>
                </div>
                <div className="col-span-10">
                    <h2 className="text-3xl font-bold">All Books</h2>
                    <SearchBar></SearchBar>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                        {filteredBooks.map((book) => (
                            <div key={book.id}
                                className="animate__animated animate__fadeInUp transition duration-300 hover:scale-100 hover:shadow-xl"
                            >
                                <BooksCard book={book} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;