import React from "react";
import '../style/StyleMusica.css';

export const ConteudoMusica = () => {

    return(
        <section className='containerMusica'>
            <div className='tituloMusica'>
                <h1>Minha Música Favorita</h1>
            </div>
            <div className='musica'>
                <h3>Música: Entrelaços - Escalene</h3>
            </div>
            <div className='video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yIzRffbRppw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    );
}