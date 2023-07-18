"use client"
import React from 'react'
import Select from 'react-select';
import useCountries from '@/app/hooks/useCountries';
import { CountrySelectValue } from '@/app/types';



interface CountrySelectProps{
  value?:CountrySelectValue;
  onChange:(value:CountrySelectValue)=>void
}
function CountrySelect({value,onChange}:CountrySelectProps) {
  const {getAll}=useCountries();
  return (
    <div>
      <Select      
      placeholder="Anywhere"
      isClearable
      options={getAll()}
      value={value}
      onChange={(item=>onChange(item as CountrySelectValue))}
        formatOptionLabel={(option:any)=>(
          <div className='flex flex-row items-center gap-3'>
            <div className="">
              {
                option.flag
              }
            </div>
              <div className="">
                {
                  option.label
                },
                <span className='text-neutral-500 ml-1 text-sm'>{option.region}</span>
              </div>
          </div>
        )}
        classNames={{
          control:()=>"p-2 border-2",          
        }}
        theme={(theme)=>({
          ...theme,
          borderRadius:6,
          colors:{
            ...theme.colors,
            primary:'gray',
            primary25:'#ffe4e6'
          }
        })}
      />
    </div>
  )
}

export default CountrySelect;