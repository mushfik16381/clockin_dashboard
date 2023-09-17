'use client';
import BreadCumb from '@/components/breadCumb/BreadCumb';
import { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import React, { CSSProperties } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select'

const Page = () => {
  const [service, setService] = useState();
  const fetchData = () => {
    axios.get(`https://clockinserver.vercel.app/service/fake/data`)
      .then(function (response) {
        // handle success
        setService(response.data.data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  const options = [
    { value: 'worker', label: 'Worker' },
    { value: 'customer', label: 'Customer' },
  ]
  // const groupBadgeStyles: CSSProperties = {
  //   backgroundColor: '#EBECF0',
  //   borderRadius: '2em',
  //   color: '#172B4D',
  //   display: 'inline-block',
  //   fontSize: 12,
  //   fontWeight: 'normal',
  //   lineHeight: '1',
  //   minWidth: 1,
  //   padding: '0.16666666666667em 0.5em',
  //   textAlign: 'center',
  // };
  
  // const formatGroupLabel = (data: GroupedOption) => (
  //   <div style={groupStyles}>
  //     <span>{data.label}</span>
  //     <span style={groupBadgeStyles}>{data.options.length}</span>
  //   </div>
  // );
  const handleDelete = async (_id) => {
    const proceed = window.confirm("Are you sure to delete this?");

  };
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden  ">
                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                  <div>
                    <h2 class="text-2xl font-semibold text-gray-800 ">
                      All Report
                    </h2>
                  </div>

                  <div>
                    <div class="inline-flex items-center gap-x-2">

                      <Select className='w-64 py-1 mr-4 focus:ring-primary border-gray-300' options={options} />

                      <input type="date" name="" id="" className='border rounded-md px-4 py-1.5 mr-4' />

                      <Link class="py-2 px-3 mr-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-secondary text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm " href="#">
                        Export Report
                      </Link>
                      <Link class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm " href="/report/addReport">
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        Add Report
                      </Link>
                    </div>
                  </div>
                </div>
                <table class="min-w-full divide-y divide-gray-200 ">
                  <thead class="bg-gray-50">
                    <tr>

                      <th scope="col" class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left">
                        <div class="flex items-center gap-x-2 pl-6">
                          <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                            ServiceDate
                          </span>
                        </div>
                      </th>

                      <th scope="col" class="px-6 py-3 text-left">
                        <div class="flex items-center gap-x-2">
                          <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                            Service Time Start
                          </span>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3 text-left">
                        <div class="flex items-center gap-x-2">
                          <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                            Service Time End
                          </span>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3 text-left">
                        <div class="flex items-center gap-x-2">
                          <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                            Customer
                          </span>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3 text-left">
                        <div class="flex items-center gap-x-2">
                          <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                            Status
                          </span>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3 text-left">
                        <div class="flex items-center gap-x-2">
                          <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                            Action
                          </span>
                        </div>
                      </th>

                      <th scope="col" class="px-6 py-3 text-right"></th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200 ">
                    {service?.length > 0 && service?.map((item, index) => <tr key={index}>
                      <td class="h-px pl-6 w-px whitespace-nowrap">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <span class="block text-md text-secondary">{item.serviceDate.slice(0, 10)}</span>
                        </div>
                      </td>
                      <td class="h-px w-72 whitespace-nowrap">
                        <div class="px-6 py-3">
                          <span class="block text-md text-secondary">{item.serviceTimeStart.slice(11, 16)}</span>
                        </div>
                      </td>
                      <td class="h-px w-72 whitespace-nowrap">
                        <div class="px-6 py-3">
                          <span class="block text-md text-secondary">{item.serviceTimeEnd.slice(11, 16)}</span>
                        </div>
                      </td>
                      <td class="h-px w-72 whitespace-nowrap">
                        <div class="px-6 py-3">
                          <span class="block text-md text-secondary">{item.customer}</span>
                        </div>
                      </td>
                      <td class="h-px w-72 whitespace-nowrap">
                        <div class="px-6 py-3">
                          <span class="block text-md text-secondary">{item.status}</span>
                        </div>
                      </td>

                      <td class="h-px w-72 whitespace-nowrap">
                        <div className="flex justify-evenly ">
                          <div class="hs-tooltip inline-block">
                            <Link href='/report/viewReport'>
                              <button type="button" class="hs-tooltip-toggle text-2xl">
                                <AiOutlineEye fill="#979797" />
                                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm " role="tooltip">
                                  View
                                </span>
                              </button>
                            </Link>
                          </div>
                          <div class="hs-tooltip inline-block">
                            <Link href='/report/editReport'>
                              <button type="button" class="hs-tooltip-toggle text-2xl">
                                <BiEditAlt fill="#979797" />
                                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm " role="tooltip">
                                  Edit
                                </span>
                              </button>
                            </Link>
                          </div>
                          <div class="hs-tooltip inline-block pr-2">
                            <button onClick={() => handleDelete(item._id)} type="button" class="hs-tooltip-toggle text-xl">
                              <BsTrash3 fill="red" />
                              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-red-800 text-xs font-medium text-white rounded-md shadow-sm " role="tooltip">
                                Delete
                              </span>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>)}
                  </tbody>
                </table>
                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">
                  <div>
                    <p class="text-sm text-gray-600 ">
                      <span class="font-semibold text-gray-800 ">{service?.length}</span> results
                    </p>
                  </div>

                  <div>
                    <div class="inline-flex gap-x-2">
                      <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Prev
                      </button>

                      <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm      ">
                        Next
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;