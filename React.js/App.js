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
import J10 from './components/react/J';
import K11 from './components/react/K';
import L12 from './components/react/L';
import M13 from './components/react/M';
import N14 from './components/react/N';
import O15 from './components/react/O';
import P16 from './components/react/P';
import Q17 from './components/react/Q';
import R18 from './components/react/R';
import S19 from './components/react/S';
import T20 from './components/react/T';
import U21 from './components/react/U';

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
        <J10 />
        <K11 />
        <L12 />
        <M13 />
        <N14 />
        <O15 />
        <P16 />
        <Q17 />
        <R18 />
        <S19 />
        <T20 />
        <U21 />
    </>
  );
};

export default App;
