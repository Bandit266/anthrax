import React, { useState } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from '../../../reusable'
// import ContentSwitch from 'src/containers/ContentSwitch'
import { Content } from 'src/containers'
// import TheContent from 'src/containers/TheContent'
import SectionA from 'src/views/AnthraxViews/SectionA/SectionA'
import SectionB from 'src/views/AnthraxViews/SectionB/SectionB'
import SectionC from 'src/views/AnthraxViews/SectionC/SectionC'

const MCTab = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

  return (
	  <>
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>
            Controlled tabs
          </CCardHeader>
          <CCardBody>
            <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                    { active === 0 && ' SectionA'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-basket" />
                    { active === 1 && ' SectionB'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart-pie"/>
                    { active === 2 && ' SectionC'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                    { active === 3 && ' Three'}
                  </CNavLink>
                </CNavItem>
				<CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart-pie"/>
                    { active === 4 && ' Four'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                    { active === 5 && ' Five'}
                  </CNavLink>
                </CNavItem>
				<CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                    { active === 6 && ' Six'}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <SectionA />
                </CTabPane>
                <CTabPane>
                  <SectionB />
                </CTabPane>
                <CTabPane>
                  <SectionC />
                </CTabPane>
				<CTabPane>
                  {`4. ${lorem}`}
                </CTabPane>
				<CTabPane>
                  {`5. ${lorem}`}
                </CTabPane>
				<CTabPane>
                  {`6. ${lorem}`}
                </CTabPane>
				<CTabPane>
                  {`7. ${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
	</>
  )
}

export default MCTab
