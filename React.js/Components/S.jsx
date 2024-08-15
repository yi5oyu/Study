// useContext()
// createContext()와 useContext()를 사용해 값를 사용 수 있음

// 제공
// import {createContext} from 'react';
// export const 이름Context = createContext();
// <이름Context.Provider value={value}>
// <자식 />
// <이름Context.Provider>

// 받음
// import {useContext} from 'react';
// import {이름Context} from '제공파일위치';
// const 변수명 = useContext(이름Context);
// <h1>{변수명}</h1>

// S에서 S2 까지 인자로 전달해 사용
import S1 from './S1'
import React, {useState, createContext} from 'react';

export const UserContext = createContext();

function S(){

    const [user, setUser] = useState("S-user-S");

    return(
        <div>
            <p>
                <h1>SSSSSSSSS</h1>
                <h2>{`start: ${user}`}</h2>
{/*                 <S1 user={user}/> */}
{/*                 UserContext 를 사용하면 props로 데이터 넘길 필요없음 */}
                <UserContext.Provider value={user}>
                    <S1 />
                </UserContext.Provider>
            </p>
        </div>
    );
}

export default S
