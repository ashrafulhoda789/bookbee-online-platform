
import { getBooks } from '@/lib/data';
import BorrowBooks from '../shared/BorrowBooks';


const MostBorrowedBooks = async() => {
    const books = await getBooks();

    return (
        <BorrowBooks books={books}/>
    );
};

export default MostBorrowedBooks;