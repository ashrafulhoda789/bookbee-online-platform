export const getBooks = async() =>{
    const res = await fetch('');
    const books = await res.json();

    return books;
}