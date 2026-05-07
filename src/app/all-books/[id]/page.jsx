import BorrowButton from "@/components/shared/BorrowButton";
import { getBooksById } from "@/lib/data";
import Image from "next/image";

const BooksDetailPage = async ({ params }) => {
    const { id } = await params;

    const book = await getBooksById(id);
    // console.log(book);



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">

            <div className="max-w-6xl w-full bg-white border border-gray-200 shadow-lg rounded-3xl overflow-hidden grid md:grid-cols-2 gap-8">

                <div className="bg-linear-to-br from-yellow-50 to-amber-100 flex items-center justify-center p-8">

                    <Image
                        src={book.image_url}
                        alt={book.title}
                        width={400}
                        height={500}
                        className="rounded-2xl object-cover w-full max-w-sm shadow-xl hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-4">

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                            {book.title}
                        </h1>

                        <span
                            className={`px-4 py-1.5 text-sm rounded-full font-semibold whitespace-nowrap shadow-sm
                        
                    ${book.category === "Tech"
                                    ? "bg-green-100 text-green-700"
                                    : book.category === "Science"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-blue-100 text-blue-700"
                                }`}
                        >
                            {book.category}
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mt-5">
                        {book.description}
                    </p>
                    <div className="border-t border-gray-200 my-6"></div>

                    <div>
                        <p className="text-sm text-gray-500 mb-1">
                            Author
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800">
                            {book.author}
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-8">

                        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5 text-center shadow-sm">

                            <p className="text-3xl font-bold text-yellow-600">
                                {book.available_quantity}
                            </p>

                            <p className="text-sm text-gray-600 mt-1">
                                Copies Left
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 
                rounded-2xl p-5 text-center shadow-sm">

                            <p className="text-3xl font-bold text-blue-600">
                                {book.borrowCount}
                            </p>

                            <p className="text-sm text-gray-600 mt-1">
                                Borrowed
                            </p>
                        </div>

                    </div>

                    <div className="mt-auto pt-8">
                        <BorrowButton book={book}></BorrowButton>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BooksDetailPage;