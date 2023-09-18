'use client';
import BreadCumb from '../../../../components/breadCumb/BreadCumb';
import React from 'react';
import Select from 'react-select'

const page = () => {
    const teamMember = [
        { value: 'Vin', label: 'Vin' },
        { value: 'John', label: 'John' },
        { value: 'Philip', label: 'Philip' }
      ]
    const serviceUser = [
        { value: 'Dom', label: 'Dom' },
        { value: 'Harry', label: 'Harry' },
        { value: 'Tony', label: 'Tony' }
      ]
    const taskList = [
        { value: 'Pliers and Drills', label: 'Pliers and Drills' },
        { value: 'Repairing Wiring Systems', label: 'Repairing Wiring Systems' },
        { value: 'Installing Electrical Conduits', label: 'Installing Electrical Conduits' }
      ]
    return (
        <div>
            <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 mx-4 '>
            <BreadCumb title="Create Schedule" />
                <form className='container mx-auto py-4'>
                    <div className="space-y-12 mt-8">
                        <div className=" pb-4">
                            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-3">
                                    <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-900">
                                        Service date
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            name="service-date"
                                            id="date"
                                            placeholder='dayte'
                                            className="block w-full px-4 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-900">
                                        Service Time Start
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            name="service-time-start"
                                            id="serviceTimeStart"
                                            placeholder='serviceTimeStart'
                                            className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 "

                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 mt-4">
                        <div className="border-b border-gray-900/10 pb-8">
                            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                        Service Time End
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            name=" service-time-end"
                                            id=" serviceTimeEnd"
                                            placeholder=' serviceTimeEnd'
                                            className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                        Service User
                                    </label>
                                    <div className="mt-2">
                                    <Select className='w-full  focus:ring-primary border-gray-300' options={serviceUser} />
                                        {/* <select class="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6">
                                            <option selected>Customer</option>
                                            <option>Jhon Roy</option>
                                            <option>Reo flne</option>
                                            <option>Devid Hun</option>
                                        </select> */}
                                        
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                        Team Member
                                    </label>
                                    <div className="mt-2">
                                    <Select className='w-full  focus:ring-primary border-gray-300' options={teamMember} />
                                        {/* <input
                                            type="text"
                                            name="worker"
                                            id="worker"
                                            placeholder='worker'
                                            className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"

                                        /> */}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                        Task List
                                    </label>
                                    <div className="mt-2">
                                    <Select className='w-full  focus:ring-primary border-gray-300' isMulti options={taskList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-12 ">
                        <button type="button" class="py-3 px-8 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-[#fff] hover:bg-[#f98808c0] focus:outline-none focus:ring-2 focus:ring-[#F98708] focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Create Schedule
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;