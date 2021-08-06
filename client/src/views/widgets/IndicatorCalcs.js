import React, { useState, useEffect } from "react";

// import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";

import Channel from "./Channel_define";
const Pusher = require('pusher-js')
let channel_name = "binance-ws"
let event_name = "binance-event"
let desc = "potatoes"
let perms = "red"

const channel = new Channel(channel_name, event_name, desc, perms)
console.info(channel)

// const TradePosition = () => {

// };
class Indi_Calc extends React.Component {
	render() {
	
		let para;
		Pusher.logToConsole = true;
    const pusher = new Pusher("078d9465c5751acb7f10", {
		cluster: 'ap4',
        forceTLS: true
    });
        const channel = pusher.subscribe('my-channel');
        channel.bind('tick-price', data => {
        para = JSON.stringify(data)               //Bind the data to the channel @ _Binance. This, Listens and binds/relays Others listen to this.
        });
	return (
		<CRow>
		{para}
		</CRow>
	)
	}
	}
export default Indi_Calc;