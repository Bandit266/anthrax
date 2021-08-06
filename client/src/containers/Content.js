import React, { Suspense } from 'react'
// import {
//   Redirect,
//   Route,
//   Switch
// } from 'react-router-dom'
import { CContainer } from '@coreui/react'
// import logo from './logo.svg';
// routes config
// import routes from '../routes'
// import TheContent from './TheContent'
import MCTab from './AnthraxDash/MainContentTab/MCTab'
import ContentSwitch from './ContentSwitch'
// import ConsoleTab from './AnthraxDash/ConsoleTab/ConsoleTab'



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const Content = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
	  <Suspense fallback={loading}>
	  <MCTab />
		<ContentSwitch />
	  </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(Content)

