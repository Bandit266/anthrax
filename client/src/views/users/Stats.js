import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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

import statsData from "./StatData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Stats = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  //   const pageChange = newPage => {
  //     currentPage !== newPage && history.push(`/stats?page=${newPage}`)
  //   }
  /* <CCard>
<CCardHeader>Statistics</CCardHeader>
<CCardBody>
  <CDataTable
	items={statsData}
	fields={fields}
	dark
	hover
	striped
	bordered
	size="sm"
	itemsPerPage={10}
	pagination
	scopedSlots={{
	  status: (item) => (
		<td>
		  <CBadge color={getBadge(item.status)}>
			{item.status}
		  </CBadge>
		</td>
	  ),
	}}
  />
</CCardBody>
</CCard> */
  /* <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          /> */
  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CCol>
      <CRow>
        Users
        <small className="text-muted"> example</small>
      </CRow>
      <CRow>
        <CDataTable
          items={statsData}
          fields={[
            { key: "name", _classes: "font-weight-bold" },
            "registered",
            "role",
            "status",
          ]}
          hover
          striped
          itemsPerPage={12}
          activePage={page}
          clickableRows
          onRowClick={(item) => history.push(`/stats/${item.id}`)}
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
          }}
        />
      </CRow>
    </CCol>
  );
};

export default Stats;
