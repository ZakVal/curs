
import './App.css';
import { useEffect } from 'react';

function Header( { inputValue , onSearchItems}) {


    return (
            <>
                <header className="header">
                    <input
                        className = "search-feild"
                        type ="text"
                        value = {inputValue}
                        onChange={onSearchItems}
                    />
                </header>
            </>
    );
}

export default Header;