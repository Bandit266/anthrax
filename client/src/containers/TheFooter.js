import React from 'react'
import { CFooter } from '@coreui/react'
import ConsoleTab from './AnthraxDash/ConsoleTab/ConsoleTab'
const TheFooter = () => {
  return (
    <CFooter className=" c-footer-fixed">
      <div>
	  <ConsoleTab />
      </div>
      {/* <div className="mfs-auto">
	  <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
