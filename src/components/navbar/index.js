import React from 'react'
import Header from './Header'

import './index.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <Header />
            <nav className='nav'>
                <ul>
                    <li><a href='#a'>HOME</a></li>
                    <li><a href='#a'>POKEMONS</a></li>
                    <li><a href='#a'>ABOUT APP</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar