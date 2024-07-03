import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import './navbar.css';

const Navbar = () => {

    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)

    const { searchParam, setSearchParam } = useContext(GlobalContext)
    console.log(searchParam);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/path_to_your_logo" alt="Logo" />
            </div>
            <div className="navbar-search">
                <form onSubmit={handleSubmit}> 
                    <input type="text"
                        value={searchParam}
                        onChange={(event) => setSearchParam(event.target.value)}
                        placeholder="Search..." />
                </form>

            </div>
            <div className="navbar-options">
                <a href="#option1">Option 1</a>
                <a href="#option2">Option 2</a>

            </div>
                <input type="text" 
                value={searchParam}
                onChange={(event)=> setSearchParam(event.target.value)}
                placeholder="Search..." />
            </div>
            <div className="navbar-options">
                <a href="#option1">Option 1</a>
                <a href="#option2">Option 2</a>

            </div>
        </nav>
    );
}

export default Navbar;
