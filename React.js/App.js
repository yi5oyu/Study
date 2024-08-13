import React from 'react';
import A1 from './components/react/A';
import B2 from './components/react/B';
import C3 from './components/react/C';
import D4 from './components/react/D';
import E5 from './components/react/E';
import F6 from './components/react/F';
import G7 from './components/react/G';
import H8 from './components/react/H';
import I9 from './components/react/I';

const App = () => {

  return (
    <>
        <A1 />
        <B2 />
        <C3 />
        <D4 name="props test" nothing={15} check={true}/>
        <D4 name="young" nothing={11} check={false}/>
        <D4 nothing={20}/>
        <E5 ck={true} pw="df"/>
        <E5 />
        <F6 />
        <G7 />
        <H8 />
        <I9 />
    </>
  );
};

export default App;
