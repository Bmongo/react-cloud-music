import React, { memo } from 'react';

import { Wrapper } from "./style";

const PlayerLeftBtns = memo(() => {
  return (
    <Wrapper>
      <button className="btn prev playbar-img"></button>
      <button className="btn stop playbar-img"></button>
      <button className="btn next playbar-img"></button>
    </Wrapper>
  );
});

export default PlayerLeftBtns;