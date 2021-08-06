import React from 'react'
import {
  TheSidebar,
  TheRightSidebar,
  TheFooter,
  TheHeader,
  ContentSwitch
} from './index'
// import Dashboard from '../views/dashboard/Dashboard'


const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
		  
	  <TheRightSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
		
        <div className="c-body">
          <ContentSwitch />
		  <TheFooter className="fixed-bottom"  />
		  </div>
		 
			    
		  </div>
		
		  
		</div>
			


  )
}

export default TheLayout
