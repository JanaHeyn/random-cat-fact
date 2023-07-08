import React from 'react';
import catLoading from '/cat-loading.gif';
import './Loading.scss';

export const Loading = () => {

    return(
        <div className="Loading">
            <img src={catLoading} className='Loading__image' alt='cat-loading'/>
        </div>
    )
}
