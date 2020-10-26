import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import AllPayments from './AllPayments';
import ReconcilledPayments from './ReconcilledPayments';

function Payments() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/all-payments`} component={AllPayments} />
        <Route exact path={`${path}/reconcilled-payments`} component={ReconcilledPayments} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  )
}

export default Payments
