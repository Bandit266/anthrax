import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
// import logo from './logo.svg';
// routes config
import routes from '../routes'
// import TheContent from './TheContent'
// import MCTab from './AnthraxDash/MainContentTab/MCTab'
// import ConsoleTab from './AnthraxDash/ConsoleTab/ConsoleTab'



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const ContentSwitch = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
					  <div className="c-wrapper">
 					
                    <CFade>
                      <route.component {...props} />
                    </CFade>

					  </div>
					 
                  )} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>

  )
}

export default React.memo(ContentSwitch)


