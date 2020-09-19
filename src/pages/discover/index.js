import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

import SubNavHeader from "@/components/sub-nav-header"

const Discover = memo((props) => {
  const { route } = props;
  return (
    <>
      <SubNavHeader routers/>
			<Suspense fallback={<div>loading</div>}>
        {renderRoutes(route.routes)}
      </Suspense>
    </>
  );
});

export default Discover;