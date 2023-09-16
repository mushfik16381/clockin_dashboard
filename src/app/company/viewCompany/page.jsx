import BreadCumb from '@/components/breadCumb/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 mx-4'>
            <BreadCumb title="Company Details" />
            <div
                class="block rounded-lg mt-12 w-2/4  bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <p class="mb-4 text-normal text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Name : Powlowski, Schuster and Wintheiser
                </p>
                <p class="mb-4 text-normal text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Email : ilene_Strosin12@hotmail.com
                </p>
                <p class="mb-4 text-normal text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Address : 76918 Morissette Lights Suite 551
                </p>
                <p class="mb-4 text-normal text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Phone: 6964644145
                </p>
                <p class="mb-4 text-normal text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Contact Name: Madison Casper
                </p>
                <p class="mb-4 text-normal text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Contact phone: 7869869054
                </p>
        </div>
        </div >
    );
};

export default page;