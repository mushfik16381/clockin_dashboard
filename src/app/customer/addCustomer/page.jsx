import BreadCumb from '@/components/breadCumb/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb title="Create Customer" />
            <div className='container mx-auto py-6'>
                <form className='container mx-auto py-4'>
                    <div className="space-y-12 mt-8">
                        <div className=" pb-4">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-3">
                                    <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-900">
                                       Customer Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder='name'
                                            className="block w-full pl-4 rounded-md border-0 py-3 text-[gray-900 ] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    Latitude
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="latitude"
                                            id="latitude"
                                            placeholder='latitude'
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 mt-4">
                        <div className="border-b border-gray-900/10 pb-8">
                            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-3">
                                    <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-900">
                                        Company
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            placeholder='company'
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder='address'
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                {/* <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                        Contact Person Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="contact-name"
                                            id="contact-name"
                                            placeholder='name'
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                        Contact Person Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="contact-phone"
                                            id="contact-phone"
                                            placeholder='phone'
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-12 ">
                        <button type="button" class="py-3 px-8 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-[#fff] hover:bg-[#f98808c0] focus:outline-none focus:ring-2 focus:ring-[#F98708] focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;