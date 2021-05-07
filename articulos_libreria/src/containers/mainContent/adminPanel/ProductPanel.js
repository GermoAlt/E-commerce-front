import React, { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import TransactionJson from '../../../resources/json/transactions.json';

export default function ProductPanel(props) {

    const transactions = useState(TransactionJson);
    console.log(transactions)
    console.log(transactions.data)
    console.log(transactions[0])
    return (
        <div className={"product-panel"}>
            <DataTable value={transactions}
           paginator rows={10} emptyMessage="No hay transacciones registradas" currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} entradas"
           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                <Column field="date" header="Fecha"/>
                <Column field="idTransaction" header="ID de transacción"/>
                <Column field="total" header="Total"/>
            </DataTable>
        </div>
    );
}