import React from 'react'
import rows from './data'
// import { CDataTable, CRow } from '@coreui/react'

// const Table = (props) => (
// <div>
//   <p>Your Table</p>
//   <CDataTable>
//   <CRow>
//     {props.rows.map((x,i) => <Row key={i} data={x} />) }
//   </CRow>
//   </CDataTable>
// </div>
// )

// const Row = (props) => (
//   <CRow>
//       <td>{props.data[0]}</td>
//       <td>{props.data[1]}</td>
//       <td>{props.data[2]}</td>
//     </CRow>
// )

	const TablePrint = () => {

		const TableP = (props) => (
			<div>
		  <p>Your Table</p>

			{props.data.map((x,i) => <Row key={i} data={x} />) }

		</div>
		)
		console.log(TableP)

		console.log(TableP(rows))
		
		const Row = (props) => (
		  <tr>
			  <td>{props.data[0]}</td>
			  <td>{props.data[1]}</td>
			  <td>{props.data[2]}</td>
			</tr>
		)

		 return TableP(rows)
	}


export default TablePrint;