import React from "react";
import Gramado from '../assets/gramado.jpg';
import '../style/StyleCidade.css';

export const ConteudoCidade = ()=> {
    return(
        <div className='container'>
            <div className='titulo'>
                <h1>Minha Cidade Favorita</h1>
            </div>
            <div className='cidade'>
                <h2>Gramado</h2>
            </div>
            <div className='contImage'>
                <img className='imagens' src={Gramado} alt="Gramado" />
            </div>
        </div>
    );
}