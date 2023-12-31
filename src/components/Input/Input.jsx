import React from 'react'
// import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';



function Input({
    id,
    label,
    type,
    disabled,
    min,
    max,
    formatPrice,
    required,
    register,
    errors
}) {
    return (
        <div className="w-full relative">
            {
                formatPrice && (
                    <BiDollar size={24}
                    className='text-neutral-700 absolute top-5 left-2'
                    />                    
                )
            }
            <input id={id} disabled={disabled} 
            { ...register(id,{required})}
            placeholder=' '
            min={min}
            max={max}
            type={type}
            className={`
            peer w-full ${label==='Description'? "p-6" : 'p-3'} bg-white border-2 rounded-md outline-none focus:outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${formatPrice? "pl-9":"pl-4"}
            ${errors[id]? " border-rose-500 focus:border-rose-500 ":"border-neutral-300 focus:border-black"}
            `}
            />
            <label className={`absolute text-md duration-150 transform -translate-y-3 ${type=='range'? "top-0":"top-3"} z-10 origin-[0] ${formatPrice? 'left-9':"left-4"} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors[id]?'text-rose-500':"text-zinc-400"}`} htmlFor="">
                {label}
            </label>
        </div>
    )
}

export default Input;