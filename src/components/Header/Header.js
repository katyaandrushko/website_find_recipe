import React from 'react'
import './Header.scss'
// import Navbar from './Navbar'
import SearchForm from './SearchForm'

const Header = () => {
   return (
      <header className="header">
         {/* <Navbar /> */}
         <div className="header-content flex align-center justify-center flex-column text-center ">
            <h1 className="text-white header-title ls-2">Find your recipe</h1>
            <p className="text-uppercase text-white my-3 ls-1 ">
               by ingredients
            </p>
            <SearchForm />
         </div>
      </header>
   )
}

export default Header
