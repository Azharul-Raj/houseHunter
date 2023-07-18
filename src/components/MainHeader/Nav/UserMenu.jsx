
import React,{useState,useCallback} from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from './Avatar/Avatar';
import MenuItem from './MenuItem/MenuItem';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const UserMenu =({currentUser})=> {
  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(false);
  const toggleMenu=useCallback(
    () => {
      setIsOpen(value=>!value)
    },
    [],
  )
  // rent modal
  const demoLogin=()=>{
   
  }
  return (
    <div className='relative'>
        <div className="flex items-center gap-3">
            <div  className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer ">
                houseHunter
            </div>
            <div onClick={toggleMenu} className="p-4 md:py-1 md:px-2 transition rounded-full gap-3 border-[1px] flex flex-row items-center hover:shadow-md cursor-pointer ">
                <AiOutlineMenu/>
                <div className="hidden md:block">
                  <Avatar image={currentUser?.image}/>
                </div>
            </div>
        </div>
        {
          isOpen && (<div className="absolute rounded-xl shadow-md w-[40vh] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
              {
                currentUser? 
                (<>
                <MenuItem label='My trips' onClick={()=>navigate('/trips')}/>
                <MenuItem label='My favorites' onClick={()=>navigate('/favorites')}/>
                <MenuItem label='My reservations' onClick={()=>navigate('/reservations')}/>
                <MenuItem label='My properties' onClick={()=>navigate('/properties')}/>
                <hr/>
                {/* <MenuItem label='Logout' onClick={signOut}/> */}
                </>)
                :
                (<>
                <MenuItem label='Login' onClick={()=>navigate("/login")}/>
              <MenuItem label='Sign Up' onClick={()=>navigate("/signup")}/>
              <MenuItem label='Demo Login' onClick={demoLogin}/>
                </>)
              }
            </div>
          </div>)
        }
    </div>
  )
}
export default UserMenu;