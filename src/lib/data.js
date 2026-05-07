export const getBooks = async() =>{
    const res = await fetch('https://bookbee-online-platform.vercel.app/data.json');
    const books = await res.json();

    return books;
}