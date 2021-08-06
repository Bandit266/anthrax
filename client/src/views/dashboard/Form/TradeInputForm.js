import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

const TradeInputForm = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);

  return (
    <>
      <CCard>
        <CCardHeader>
          Trade Form
          <small> Elements</small>
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Static</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <p className="form-control-static">Username</p>
              </CCol>
            </CFormGroup>
			<CFormGroup row>
              <CCol md="3">
                <CLabel>Trade Direction</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox1"
                    name="inline-checkbox1"
                    value="option1"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">
                    Long
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    Short
                  </CLabel>
                </CFormGroup>
				
				</CCol>
            </CFormGroup>
			<CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select">Coin Futures</CLabel>
              </CCol>
              <CCol xs="12" md="4">

                <CSelect custom name="select" id="select">
                  <option value="0">BTC | TETHER Margin Perp</option>
                  <option value="1">ETH | TETHER Margin Perp</option>
                  <option value="2">FIL | TETHER Margin Perp</option>
                  <option value="3">BNB | TETHER Margin Perp</option>
				  <option value="4">XRP | TETHER Margin Perp</option>
                  <option value="5">LTC | TETHER Margin Perp</option>
                  <option value="6">ADA | TETHER Margin Perp</option>
                  <option value="7">ELGO | TETHER Margin Perp</option>
				  <option value="8">LINK | TETHER Margin Perp</option>
				  <option value="9">UNI | TETHER Margin Perp</option>
                  <option value="10">DOT | TETHER Margin Perp</option>
                  <option value="11">EOS | TETHER Margin Perp</option>
                  <option value="12">LUNA | TETHER Margin Perp</option>
                </CSelect>

				</CCol>
				<CCol xs="12" md="4">

				<CSelect custom name="select" id="select">
                  <option value="0">BTC | USD Coin Perp</option>
                  <option value="1">ETH | USD Coin Perp</option>
                  <option value="2">FIL | USD Coin Perp</option>
                  <option value="3">BNB | USD Coin Perp</option>
				  <option value="4">XRP | USD Coin Perp</option>
                  <option value="5">LTC | USD Coin Perp</option>
                  <option value="6">ADA | USD Coin Perp</option>
                  <option value="7">ELGO | USD Coin Perp</option>
				  <option value="8">LINK | USD Coin Perp</option>
				  <option value="9">UNI | USD Coin Perp</option>
                  <option value="10">DOT | USD Coin Perp</option>
                  <option value="11">EOS | USD Coin Perp</option>
                  <option value="12">LUNA | USD Coin Perp</option>
                </CSelect>

              </CCol>
            </CFormGroup>
			<CFormGroup row>
              <CCol md="3">
                <CLabel>Leverage</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox1"
                    name="inline-checkbox1"
                    value="option1"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">
                    0-10
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    10-20
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    20-30
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    30-40
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox1"
                    name="inline-checkbox1"
                    value="option1"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">
                    40-50
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    50-60
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    60-70
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    70-80
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    80-90
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    90-100
                  </CLabel>
                </CFormGroup>
				<CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                    custom
                    id="inline-checkbox2"
                    name="inline-checkbox2"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
                    100-125
                  </CLabel>
                </CFormGroup>
				
				</CCol>
            </CFormGroup>
			<CFormGroup row>
              <CCol md="3">
                <CLabel>Checkboxes</CLabel>
              </CCol>
              <CCol md="3">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    Option 1
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Option 2
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox3"
                    name="checkbox3"
                    value="option3"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox3"
                  >
                    Option 3
                  </CLabel>
                </CFormGroup>
              </CCol>
			  <CCol md="3">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    Option 1
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Option 2
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox3"
                    name="checkbox3"
                    value="option3"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox3"
                  >
                    Option 3
                  </CLabel>
                </CFormGroup>
              </CCol>
			  <CCol md="3">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    Option 1
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Option 2
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox3"
                    name="checkbox3"
                    value="option3"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox3"
                  >
                    Option 3
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row></CFormGroup>













            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input"></CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>
            
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="disabled-input">Disabled Input</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="disabled-input"
                  name="disabled-input"
                  placeholder="Disabled"
                  disabled
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="textarea-input">Comments</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="9"
                  placeholder="Comments about the process..."
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select">Select</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="select" id="select">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup>
           
            <CFormGroup row>
              <CCol tag="label" sm="3" className="col-form-label">
                Switch checkboxes
              </CCol>
              <CCol sm="9">
                <CSwitch className="mr-1" color="primary" defaultChecked />
                <CSwitch
                  className="mr-1"
                  color="success"
                  defaultChecked
                  variant="outline"
                />
                <CSwitch
                  className="mr-1"
                  color="warning"
                  defaultChecked
                  variant="opposite"
                />
                <CSwitch
                  className="mr-1"
                  color="danger"
                  defaultChecked
                  shape="pill"
                />
                <CSwitch
                  className="mr-1"
                  color="info"
                  defaultChecked
                  shape="pill"
                  variant="outline"
                />
                <CSwitch
                  className="mr-1"
                  color="dark"
                  defaultChecked
                  shape="pill"
                  variant="opposite"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Radios</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox">
                  <CInputRadio
                    className="form-check-input"
                    id="radio1"
                    name="radios"
                    value="option1"
                  />
                  <CLabel variant="checkbox" htmlFor="radio1">
                    Option 1
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox">
                  <CInputRadio
                    className="form-check-input"
                    id="radio2"
                    name="radios"
                    value="option2"
                  />
                  <CLabel variant="checkbox" htmlFor="radio2">
                    Option 2
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox">
                  <CInputRadio
                    className="form-check-input"
                    id="radio3"
                    name="radios"
                    value="option3"
                  />
                  <CLabel variant="checkbox" htmlFor="radio3">
                    Option 3
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default TradeInputForm;
