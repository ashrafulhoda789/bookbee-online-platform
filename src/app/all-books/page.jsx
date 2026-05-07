import { getBooks } from "@/lib/data";


const AllBooksPage = async() => {

    const books = await getBooks();
    // console.log(books);
    return (
        <div>
            
        </div>
    );
};

export default AllBooksPage;