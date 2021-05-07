import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import React from "react";

const TransactionDetails = (props) => {
    console.log(props)
    return (
        <div>
            <DataTable value={props.transaction} dataKey="idTransaction" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive">
                <Column field={"name"} header={"Id"} body={""}/>
                <Column field={"price"} header={"Fecha"} body={""}/>
                <Column field={"hasDiscount"} header={"Total"} body={""}/>
            </DataTable>
        </div>
    )
}

export default TransactionDetails;