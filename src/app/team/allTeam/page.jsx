import BreadCumb from '@/components/breadCumb/BreadCumb';
import { AiOutlineEye } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import React from 'react';

const Profile = () => {
    return (
<div className=' mt-6 '>
      <BreadCumb title="All Team" />
      <div class="flex flex-col mt-12">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Regional Paradigm Technician</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">john@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
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
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Forward Response Developer</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">jim@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">27</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
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
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Product Directives Officer</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">joe@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">31</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</td>
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