import React from 'react';

 import {BiSearch} from 'react-icons/bi'
import useSearchModal from '../../../../hooks/useSearchModal';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
export default function Search() {
    const searchModal=useSearchModal();
    const params=useSearchParams() 



    
  return (
    <div
    onClick={searchModal.onOpen}
    className='border-[1px] w-full md:w-auto py-2 shadow-sm cursor-pointer rounded-full hover:shadow-md transition'>
        <div className="flex justify-between items-center">
            <p className="text-sm font-semibold px-6 ">
                locationLabel
            </p>
            <p className="hidden sm:block text-sm font-semibold px-6 flex-1 text-center border-x-[1px]">
                durationLabel
            </p>
            <div className="flex pl-6 pr-2 items-center text-sm">
                <p className="hidden sm:block">guestLabel</p>
                <div className="bg-red-500 ml-2 p-2 rounded-full text-white">
                    <BiSearch size={18}/>
                </div>
            </div>
        </div>
    </div>
  )
}
