import BreadCumb from '@/components/breadCumb/BreadCumb';
import { AiOutlineEye } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import React from 'react';

const Profile = () => {
    return (
<div className=' mt-6 '>
      <BreadCumb title="All Company" />
      <div class="flex flex-col mt-12">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize">Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize">Verified</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize">Email</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize">Phone Number</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize">Address</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize">Contact Person Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize">Contact Person Number</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 capitalize">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Yes</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">john@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">464523455</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Doe Brown</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">965067834</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                      <div className="flex justify-between ">
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <AiOutlineEye fill="#979797" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              View
                            </span>
                          </button>
                        </div>
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <BiEditAlt fill="#979797" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              Edit
                            </span>
                          </button>
                        </div>
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <BsTrash3 fill="red" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-red-500 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              Delete
                            </span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">No</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">jim@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">2634254547</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Jhon Green</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">783285692</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                    <div className="flex justify-between ">
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <AiOutlineEye fill="#979797" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              View
                            </span>
                          </button>
                        </div>
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <BiEditAlt fill="#979797" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              Edit
                            </span>
                          </button>
                        </div>
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <BsTrash3 fill="red" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-red-500 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              Delete
                            </span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Joe Black</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Yes</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">joe@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">313456478</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Rwer jorg</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">854239535</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                    <div className="flex justify-between ">
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <AiOutlineEye fill="#979797" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              View
                            </span>
                          </button>
                        </div>
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <BiEditAlt fill="#979797" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              Edit
                            </span>
                          </button>
                        </div>
                        <div class="hs-tooltip inline-block">
                          <button type="button" class="hs-tooltip-toggle ">
                            <BsTrash3 fill="red" />
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-red-500 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                              Delete
                            </span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;