'use client'

import { authClient } from '@/lib/auth-client';
import userAvatar from '../../assets/avatar.jpg';
import Image from 'next/image';
import { UpdateUserModal } from '@/components/UpdateUserModal';


const MyProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

            <div className="w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-3xl overflow-hidden">

                <div className="bg-yellow-50 py-6 text-center border-b border-yellow-100">
                    <h2 className="text-2xl font-bold text-gray-800">
                        My Profile
                    </h2>
                </div>

                <div className="flex justify-center mt-6">

                    <div className="relative">

                        <Image
                            src={user?.image || userAvatar}
                            alt="User Avatar"
                            width={150}
                            height={150}
                            className="rounded-full w-36 h-36 object-cover border-4 border-yellow-200 shadow-md"
                        />
                    </div>

                </div>

                <div className="flex flex-col items-center px-6 py-5">

                    <h2 className="text-xl font-bold text-gray-800">
                        {user?.name}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        {user?.email}
                    </p>

                    <div className="w-full border-t border-gray-200 my-5"></div>

                    <div className="w-full">
                        <UpdateUserModal></UpdateUserModal>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default MyProfilePage;