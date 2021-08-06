import React from "react";
//import TablePrint from '../../containers/TableCell';
// import VeriForm from "./Form/Veriform";
// import TradeInputForm from "./Form/TradeInputForm";

import {
  CBadge,
  //   CButton,
  //   CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  // CProgress,
  CRow,
//   CCallout,
//   CDataTable,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
import Stats from "../../users/Stats.js";
// import StratTest from "../../containers/components/StratTest";
//import ChannelOne from "../../containers/Channels.js";
// import ChannelDir from "../../containers/Channels.js";
// import MainChartExample from "../charts/MainChartExample.js";
// import TradeChart from "../../charts/TradingV.js";
// import Chart from "../../containers/datachart";
// import RealTimeList from "../../APIfx/RTL";
// import RealTList from "../../APIfx/RTLdisplay"
// import HoroscopeReport from "../../APIfx/firstGet"
// import Channel_Link from "../../containers/components/Position.js"
// import statsData from "../users/StatData";
//import Widgets from "../widgets/Widgets.js";
// const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
// const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));
//test data
// console.log(ChannelOne)
// const getBadge = (status) => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Pending":
//       return "warning";
//     case "Banned":
//       return "danger";
//     default:
//       return "primary";
//   }
// };
// const fields = ["name", "registered", "role", "status"];


    // Enable pusher logging - don't include this in production
const SectionB = () => {

  return (
    <>
<CCard>
        <CRow>
          <CCol>
            <CCardHeader>Traffic {" & "} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6"></CCol>
                  </CRow>

                  {/* <!-- TradingView Widget BEGIN --> */}
                  <div className="tradingview-widget-container">
                    <div id="tradingview_06eb5"></div>
                    {/* {<TradeChart />} */}
                  </div>

                  {/* <!-- TradingView Widget END --> */}

                  <hr className="mt-0" />

                  <div className=""></div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1">
                        <CBadge shape="pill" color="info">
                          &nbsp;
                        </CBadge>
                      </sup>
                      New clients &nbsp;
                      <sup className="px-1">
                        <CBadge shape="pill" color="danger">
                          &nbsp;
                        </CBadge>
                      </sup>
                      Recurring clients
                    </small>
                  </div>
                </CCol>
                <CCol>
                  {/* <Channel_Link /> */}
                </CCol>
                <CCol>
                  <Stats />
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>aaa</CCardFooter>
          </CCol>
        </CRow>
      </CCard>

    </>
  );
};

export default SectionB;
