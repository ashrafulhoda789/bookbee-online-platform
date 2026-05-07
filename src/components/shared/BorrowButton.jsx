'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


const BorrowButton = ({ book }) => {

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleBorrowBtn = () => {
        if (!user) {
            redirect('/signin');
        }
        else {
            toast.success(`${book.title} Book is Borrowed successfully!`);
        }
    }
    return (
        <div>
            <Button onClick={handleBorrowBtn}
                className="w-full bg-yellow-400 hover:bg-yellow-500  text-gray-900 font-semibold text-base py-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
                Borrow This Book
            </Button>
        </div>
    );
};

export default BorrowButton;