import { Button, Card, CardFooter, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksCard = ({ book }) => {
    return (
        <Card className="max-w-sm rounded-2xl border p-3 shadow-md">
            <div className="relative flex justify-center overflow-hidden rounded-xl  p-5">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={200}
                    height={280}
                    className="h-70 w-50 rounded-xl object-cover"
                />
            </div>

            <Card.Header className="gap-3">
                <div className="flex items-start justify-between gap-2">
                    <h2 className="line-clamp-1 text-xl font-bold">
                        {book.title}
                    </h2>

                    <Chip
                        size="sm"
                        variant="bordered"
                        className={`font-semibold ${book.category === "Tech"
                                ? "border-green-500 text-green-600"
                                : book.category === "Science"
                                    ? "border-yellow-500 text-yellow-500"
                                    : "border-blue-500 text-blue-500"
                            }`}
                    >
                        {book.category}
                    </Chip>
                </div>

                <p className="line-clamp-2 text-sm text-gray-600">
                    {book.description}
                </p>
            </Card.Header>

            <CardFooter className="justify-end">
                <Link href={`/all-books/${book.id}`}>
                    <Button
                        radius="md"
                        className="bg-yellow-400 font-semibold text-black hover:bg-yellow-300"
                    >
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default BooksCard;