import React from 'react';
import catFactsLogo from '/cat-facts.png';
import './CatFact.scss';


export const CatFact = ({cat, handleClick}) => {

    return(
        <div className="CatFact">   
            <img src={catFactsLogo} className='CatFact__logo' alt='cat-logo' />

            <p className='CatFact__text'>{ cat.fact }</p>
            
            <button className='CatFact__button' onClick={handleClick}>Get random fact</button>
        </div>
    )
}
