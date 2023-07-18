import React from 'react'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import UserMenu from './UserMenu'
import Container from '../../Container'
// import Categories from './Categories/Categories'



const Nav =({currentUser})=> {
  return (
    <div className='fixed z-10 bg-white shadow-sm w-full'>
        <div className="py-4 border-b-[1px]">
       <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <img src="/images/logo.png" alt="logo" className='cursor-pointer w-20' />
            <Search/>
            <UserMenu currentUser={currentUser}/>
            </div>
       </Container>
       </div>
       {/* <Categories/> */}
    </div>
  )
}
export default Nav;