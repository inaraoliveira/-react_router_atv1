import React from "react";
import { Link } from 'react-router-dom';
import '../style/StyleHeader.css'

export const Header = ()=>{
    
    return(
        <header className='container-nav'>
            <nav className='navbar'>
                <Link className='link' to='/'>HOME</Link>
                <Link className='link' to='/Musica'>MÚSICA</Link>
                <Link className='link' to='/Cidade'>CIDADE</Link>
            </nav>
        </header>
    );
}