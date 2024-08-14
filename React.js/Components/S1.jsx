import S2 from './S2'
import React, {useContext} from 'react';
import {UserContext} from './S';

function S1(){ // props

    const user = useContext(UserContext);

    return(
        <div>
            <p>
                <h1>S1</h1>
{/*                 <S2 user={props.user}/> */}
                <h2>`ddd: {user}`</h2>
                <S2 />
            </p>
        </div>
    );
}

export default S1
