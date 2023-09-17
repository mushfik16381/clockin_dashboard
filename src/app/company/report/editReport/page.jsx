
import BreadCumb from '../../../../components/breadCumb/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 mx-4'>
            <BreadCumb title="Edit Report" />
                <form className='container mx-auto py-4'>
                    <div className="space-y-12 mt-8">
                        <div className=" pb-4">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-3">
                                    <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-900">
                                       Service Date
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            name="name"
                                            id="name"
                                            placeholder='name'
                                            className="block w-full px-4 pl-4 rounded-md border-0 py-3 text-[gray-900 ] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    Status
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="status"
                                            id="status"
                                            placeholder='status'
                                            className="block pl-4 w-full px-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

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
                                    Service Time Start
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            name="company"
                                            id="company"
                                            placeholder='company'
                                            className="block pl-4 px-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    Service Time End
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            name="address"
                                            id="address"
                                            placeholder='time'
                                            className="block pl-4 px-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                     Worker Login
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            name="contact-name"
                                            id="contact-name"
                                            placeholder='name'
                                            className="block px-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                    Worker Logout
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            name="contact-phone"
                                            id="contact-phone"
                                            placeholder='phone'
                                            className="block px-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-12 ">
                        <button type="button" class="py-3 px-8 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-[#fff] hover:bg-[#f98808c0] focus:outline-none focus:ring-2 focus:ring-[#F98708] focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Edit Report
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;