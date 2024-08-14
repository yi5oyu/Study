import React, {useContext} from 'react';
import {UserContext} from './S';

function S2(){ // props

    // useContext와 UserContext를 사용해 S의 user를 사용할 수 있음
    const user = useContext(UserContext);

    return(
        <div>
            <p>
                <h1>S2</h1>
{/*                 <h2>{`last: ${props.user}`}</h2> */}
                 <h2>{`last: ${user}`}</h2>
            </p>
        </div>
    );
}

export default S2
