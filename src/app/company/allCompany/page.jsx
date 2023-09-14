import Link from 'next/link';
import React from 'react';

const Profile = () => {
    return (
        <div className='  mt-12'>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Verified</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Number</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Brown</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Yes</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">john@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">937465589</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Res</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">643640356</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Green</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">No</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">jim@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">937465589</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Deg</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">6436487433</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Black</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Yes</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">joe@site.com</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">937465589</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Rog</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">6436483484</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
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