export const getBooks = async() =>{
    const res = await fetch('https://bookbee-online-platform.vercel.app/data.json');
    const books = await res.json();

    return books;
}

export const getQuetos = async() => {
    const res = await fetch('https://bookbee-online-platform.vercel.app/quetos.json');
    const quetos = await res.json();

    return quetos;
}