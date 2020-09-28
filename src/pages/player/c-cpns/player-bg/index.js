import React, { memo } from 'react';

import { PlayerWrapper } from "./style";

const PlayerBg = memo(props => {
  const { setLock, lock } = props;
  return (
    <PlayerWrapper>
      <div className="bg playbar-img" />
      <div className={"r-left playbar-img " + (lock ? "lock": '')}>
        <div className="btn playbar-img" onClick={() => setLock(!lock)}/>
      </div>
      <div className="r-right playbar-img" />
    </PlayerWrapper>
  );
});

export default PlayerBg;